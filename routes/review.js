const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");

const { validateReview, isLoggeIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");

// * post route
router.post("/", isLoggeIn, validateReview, reviewController.createReview);

// * Delete Review Route
router.delete(
  "/:reviewId",
  isLoggeIn,
  isReviewAuthor,
  reviewController.destroyReview
);

module.exports = router;
