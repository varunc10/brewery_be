const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  id: String,
  rating: Number,
  description: String,
});

const Rating = new mongoose.model("rating", ratingSchema);

module.exports = Rating;
