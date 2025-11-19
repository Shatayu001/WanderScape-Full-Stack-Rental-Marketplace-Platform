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
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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

// * SEARCH ROUTE
router.get("/search", listingController.searchListing);

// * GENERATE AI DESCRIPTION
router.post("/ai/description", async (req, res) => {
  console.log("AI ROUTE HIT : ", req.body);
  const { title, location } = req.body;

  if (!title || !location) {
    return res.status(400).json({ error: "Missing title or location" });
  }

  const prompt = `
Generate a property listing description.
Title: "${title}"
Location: "${location}"
Tone: warm, inviting, travel-friendly.
Length: 120–180 words.
  `;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0].message.content.trim();
    res.json({ description: text });
  } catch (err) {
    console.error("❌ GROQ ERROR:", err);
    res.status(500).json({ error: "AI generation failed" });
  }
});

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
