// External Dependancies
const mongoose = require('mongoose')

const EmotionSchema = new mongoose.Schema({
  name: String,
  userID: String,
  value: Number
})

module.exports = mongoose.model('Emotion', EmotionSchema)
