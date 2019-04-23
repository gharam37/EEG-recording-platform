// External Dependancies
const mongoose = require('mongoose')

const ValenceSchema = new mongoose.Schema({
  name: String,
  userID: String,
  value: Number,
  Trial:Number

})

module.exports = mongoose.model('Valence', ValenceSchema)
