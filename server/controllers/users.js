const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports.createUser = async (req, res) => {
  const { name, email, password, phoneNumber, type } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    // make new user
    user = new User({
      name,
      email,
      password,
      phoneNumber,
      type,
    });

    // Encrypt password
    user.password = await bcrypt.hash(password, 10);

    // save user to database
    await user.save();

    // Return jsonwebtoken
    const payload = {
      user: {
        email: user.email,
        type: user.type,
      },
    };

    /// change the expiresIn to 360 (one hour) before deployement
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.editUser = async (req, res) => {
  try {
    const { email } = req.params;
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    await User.updateOne({email}, req.body);
    res.send('success in updating user');
  } catch (error) {
    res.send('Error in updating' + error.message);
  }
};

module.exports.deleteUser = (req, res) => {
  const { email } = req.params;
	User.deleteOne({email})
	.then(()=>{
		res.send("deleting done")
	})
	.catch((err)=>{
		res.send("Error in delete: " + err.message)
	})
};

module.exports.getStudents = async (req, res) => {
  try {
    let users = await User.find({ type: 'Student' }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports.getProfile = async (req, res) => {
  try {
    const {email} = req.params;
    let data = await User.findOne({ email }).select('-password');
    res.json(data);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
