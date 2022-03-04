const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports.tokenUser = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await User.findOne({
      where: { email },
      attributes: { exclude: ["password", "updatedAt", "createdAt"] },
    });
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email });
    // check if it's not a user
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // we found the user with the same email so we want to check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Return jsonwebtoken
    const payload = {
      user: {
        email,
      },
    };
    /// change the expiresIn to 360 (one hour) before deployement
    jwt.sign(payload, "watermelon", { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      // res.json({ token, type: user.type });
      res.json({ token, type: user.type });
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};
