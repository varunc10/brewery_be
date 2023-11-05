const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: String,
  username: String,
  rating: Number,
  description: String,
});

const Review = new mongoose.model("review", reviewSchema);

module.exports = Review;
