const mongoose = require('mongoose')

const AdSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  categoryName: { type: String, required: true },
  image: { type: String, required: true },
})

module.exports = mongoose.model('Ads', AdSchema)

