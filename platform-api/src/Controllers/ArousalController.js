const boom = require('boom')

// Get Data Models
const Arousal = require('../models/Arousal')

// Get all Arousals
exports.getArousals = async (req, reply) => {
  try {
    const Arousals = await Arousal.find()
    console.log('Hello'+Arousals)
    return Arousals
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single Arousal by ID
exports.getSingleArousal = async (req, reply) => {
  try {
    const id = req.params.id
    const arousal = await Arousal.findById(id)
    return arousal
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Arousal
exports.addArousal = async (req, reply) => {
  try {
    const arousal =new Arousal(req.body)
    console.log('Hello'+arousal)
    arousal.save()
    return arousal;
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Arousal
exports.updateArousal = async (req, reply) => {
  try {
    const id = req.params.id
    const arousal = req.body
    const { ...updateData } = arousal
    const update = await Arousal.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a Arousal
exports.deleteArousal = async (req, reply) => {
  try {
    const id = req.params.id
    const arousal = await Arousal.findByIdAndRemove(id)
    return arousal
  } catch (err) {
    throw boom.boomify(err)
  }
}
