const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all Users
exports.getUsers = async (req, reply) => {
  try {
    const Users = await User.find()
    console.log('Hello'+Users)
    return Users
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single User by ID
exports.getSingleUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new User
exports.addUser = async (req, reply) => {
  try {
    const user =new User(req.body)
    console.log('Hello'+user)
    return user.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing User
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = req.body
    const { ...updateData } = user
    const update = await User.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a User
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}
