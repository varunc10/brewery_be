const axios = require("axios");
const User = require("../models/user");
const Review = require("../models/review");

exports.findReviewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.find({ id });

    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "An error occurred while fetching reviews" });
  }
};

exports.postReviews = async (req, res) => {
  const { id } = req.params;
  const { rating, description, username } = req.body;

  try {
    const newReview = new Review({
      id,
      username,
      rating,
      description,
    });
    await newReview.save();
    res.status(200).json({ success: "Successfully uploaded review" });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "An error occurred while posting review" });
  }
};
