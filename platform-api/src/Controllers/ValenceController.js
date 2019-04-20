const boom = require('boom')

// Get Data Models
const Valence = require('../models/Valence')

// Get all Valences
exports.getValences = async (req, reply) => {
  try {
    const Valences = await Valence.find()
    console.log('Hello'+Valences)
    return Valences
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single Valence by ID
exports.getSingleValence = async (req, reply) => {
  try {
    const id = req.params.id
    const valence = await Valence.findById(id)
    return valence
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Valence
exports.addValence = async (req, reply) => {
  try {
    const valence =new Valence(req.body)
    console.log(req.body)
    console.log('Hello'+valence)
    valence.save()
    return valence;
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing valence
exports.updateValence = async (req, reply) => {
  try {
    const id = req.params.id
    const valence = req.body
    const { ...updateData } = valence
    const update = await Valence.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a Valence
exports.deleteValence = async (req, reply) => {
  try {
    const id = req.params.id
    const valence = await Valence.findByIdAndRemove(id)
    return valence
  } catch (err) {
    throw boom.boomify(err)
  }
}
