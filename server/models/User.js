const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, default: null },
  type: { type: String, required: true },
  status: { type: Number, default: 0 },
  coursesNum: { type: Number, default: 0 },
  ads: { type: [Object], default: [] },
  major: { type: String, default: "" },
  profileInfo: { type: String, default: "" },
  location: { type: String, default: "" },
});

module.exports = mongoose.model("Users", UserSchema);
