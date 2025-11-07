const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
};

module.exports.renderNewForm = (req, res) => {
  const categories = [
    "Trending",
    "Rooms",
    "Iconic Cities",
    "Mountains",
    "Castles",
    "Pools",
    "Camping",
    "Farms",
    "Arctic",
    "Domes",
    "Boats",
  ];
  res.render("listings/new.ejs", { categories });
};

module.exports.searchListing = wrapAsync(async (req, res) => {
  const keyword = req.query.keyword || "";

  if (keyword.trim().length < 1) {
    req.flash("error", "Search cannot be empty");
    return res.redirect("/listings");
  }

  const listings = await Listing.find({
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { location: { $regex: keyword, $options: "i" } },
      { country: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ],
  });

  res.render("listings/searchResults", { listings, keyword });
});

module.exports.update = wrapAsync(async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Send valid data for listing");
  }
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, req.body.listing);

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  if (req.body.category) {
    listing.category = req.body.category;
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
});

module.exports.show = wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listings was not found!");
    return res.redirect("/listings");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
});

module.exports.addNewListing = wrapAsync(async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;
  newListing.category = req.body.category;
  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
});

module.exports.renderEditForm = wrapAsync(async (req, res) => {
  const categories = [
    "Trending",
    "Rooms",
    "Iconic Cities",
    "Mountains",
    "Castles",
    "Pools",
    "Camping",
    "Farms",
    "Arctic",
    "Domes",
    "Boats",
  ];
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listings was not found!");
    return res.redirect("/listings");
  }
  let originalImgUrl = listing.image.url;
  originalImgUrl = originalImgUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImgUrl, categories });
});

module.exports.destroyListing = wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
});
