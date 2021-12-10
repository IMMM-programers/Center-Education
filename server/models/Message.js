const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  messageContent: { type: String, required: true },
  phoneNumber: { type: String , default: null},
})

module.exports = mongoose.model('Messages', MessageSchema)