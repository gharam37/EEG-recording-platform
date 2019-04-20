const boom = require('boom')

// Get Data Models
const Emotion = require('../models/Emotion')

// Get all Emotions
exports.getEmotions = async (req, reply) => {
  try {
    const Emotions = await Emotion.find()
    console.log('Hello'+Emotions)
    return Emotions
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single Emotion by ID
exports.getSingleEmotion = async (req, reply) => {
  try {
    const id = req.params.id
    const emotion = await Emotion.findById(id)
    return emotion
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Emotion
exports.addEmotion = async (req, reply) => {
  try {
    const emotion =new Emotion(req.body)
    console.log('Hello'+emotion)
    emotion.save()
    return emotion;
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Emotion
exports.updateEmotion = async (req, reply) => {
  try {
    const id = req.params.id
    const emotion = req.body
    const { ...updateData } = emotion
    const update = await Emotion.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a Emotion
exports.deleteEmotion = async (req, reply) => {
  try {
    const id = req.params.id
    const emotion = await Emotion.findByIdAndRemove(id)
    return emotion
  } catch (err) {
    throw boom.boomify(err)
  }
}
