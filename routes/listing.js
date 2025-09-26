const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");
const { isLoggeIn, isOwner, validateListing } = require("../middleware");
const listingController = require("../controllers/listings");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage: storage });

// * More compact
router
  .route("/")
  // * INDEX ROUTE
  .get(wrapAsync(listingController.index))
  // * ADD NEW LISTING
  .post(
    isLoggeIn,
    validateListing,
    upload.single("listing[image]"),
    listingController.addNewListing
  );

// * NEW ROUTE
router.get("/new", isLoggeIn, listingController.renderNewForm);

router
  .route("/:id")
  // * SHOW ROUTE
  .get(listingController.show)
  // * UPDATE ROUTE
  .put(
    isLoggeIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    listingController.update
  )
  // * DELETE LISTING
  .delete(isLoggeIn, isOwner, listingController.destroyListing);

// * EDIT A ROUTE
router.get("/:id/edit", isLoggeIn, isOwner, listingController.renderEditForm);

module.exports = router;
