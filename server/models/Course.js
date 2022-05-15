const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  videos: { type: [Object], default: [] },
  categoryName: { type: String, required: true },
  details: { type: [String], default: [] },
  teacherEmail: { type: String, required: false },
  material: { type: String, default: null },
});

module.exports = mongoose.model("Courses", CourseSchema);
