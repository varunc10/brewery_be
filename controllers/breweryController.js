const axios = require("axios");
const User = require("../models/user");
const Review = require("../models/rating");

exports.brewerySearch = async (req, res) => {
  const searchType = req.query.searchType;
  const searchTerm = req.query.searchTerm;

  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries?${searchType}=${searchTerm}`
    );
    const result = response.data;

    const breweriesWithReviews = await Promise.all(
      result.map(async (brewery) => {
        const reviews = await Review.find({ id: brewery.id });
        if (reviews.length === 0) {
          brewery.rating = "No Reviews Added";
        } else {
          let totalRating = 0;
          for (const review of reviews) {
            totalRating += review.rating;
          }
          const rating = totalRating / reviews.length;
          brewery.rating = parseFloat(rating.toFixed(1));
        }
        return brewery;
      })
    );

    res.json(breweriesWithReviews);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};

exports.findBreweryById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries/${id}`
    );
    const result = response.data;

    res.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
