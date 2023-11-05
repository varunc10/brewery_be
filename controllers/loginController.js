const User = require("../models/user");
const bcrypt = require('bcrypt')

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user)
      return res.status(401).json({ message: "Invalid username or password" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid username or password" });

    const userDetails = {
      username: user.username,
    };

    res.status(201).json({ userDetails });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
