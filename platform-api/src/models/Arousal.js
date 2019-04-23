// External Dependancies
const mongoose = require('mongoose')

const ArousalSchema = new mongoose.Schema({
  name: String,
  userID: String,
  value: Number,
  Trial:Number
})

module.exports = mongoose.model('Arousal', ArousalSchema)
