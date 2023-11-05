const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const Review = require("./models/rating");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const registrationRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const breweryRoute = require("./routes/breweryRoute");
const reviewRoute = require("./routes/reviewRoute");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/register", registrationRoute);
app.use("/login", loginRoute);
app.use("/brewery", breweryRoute);
app.use("/reviews", reviewRoute);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(async () => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
