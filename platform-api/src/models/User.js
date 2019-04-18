// External Dependancies
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number
})

module.exports = mongoose.model('User', UserSchema)
