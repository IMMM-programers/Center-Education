const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  videos: { type: [String] , default: []},
  categoryName: { type: String, required: true },
  details: { type: [String], default: [] },
  teacherEmail: { type: String, required: true },
})

module.exports = mongoose.model('Courses', CourseSchema)
