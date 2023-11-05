const User = require("../models/user");
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser)
      return res.status(400).json({ error: "Email is already registered." });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    const userDetails = {
      username: newUser.username,
    };
    res
      .status(201)
      .json({ message: "User registered successfully.", userDetails });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};
