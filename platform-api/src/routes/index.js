// Import our Controllers
const UserController = require('../controllers/UserController')
const User = require('../models/User')
const ValenceController = require('../controllers/ValenceController')
const Valence = require('../models/Valence')
const ArousalController = require('../controllers/ArousalController')
const EmotionController = require('../controllers/EmotionController')


const routes = [
  {
    method: 'GET',
    url: '/api/Users',
    handler: UserController.getUsers
  },
  {
    method: 'GET',
    url: '/api/Users/:id',
    handler: UserController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/Users',
    handler: UserController.addUser,
  },
  {
    method: 'PUT',
    url: '/api/Users/:id',
    handler: UserController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/Users/:id',
    handler: UserController.deleteUser
  },
//////////////////////////// Valence/////////////////

{
  method: 'GET',
  url: '/api/Valences',
  handler: ValenceController.getValences
},
{
  method: 'GET',
  url: '/api/Valences/:id',
  handler: ValenceController.getSingleValence
},
{
  method: 'POST',
  url: '/api/Valences',
  handler: ValenceController.addValence,
},
{
  method: 'PUT',
  url: '/api/Valences/:id',
  handler: ValenceController.updateValence
},
{
  method: 'DELETE',
  url: '/api/Valences/:id',
  handler: ValenceController.deleteValence
},
//////////////////Arousal/////////////////

{
  method: 'GET',
  url: '/api/Arousals',
  handler: ArousalController.getArousals
},
{
  method: 'GET',
  url: '/api/Arousals/:id',
  handler: ArousalController.getSingleArousal
},
{
  method: 'POST',
  url: '/api/Arousals',
  handler: ArousalController.addArousal,
},
{
  method: 'PUT',
  url: '/api/Arousals/:id',
  handler: ArousalController.updateArousal
},
{
  method: 'DELETE',
  url: '/api/Arousals/:id',
  handler: ArousalController.deleteArousal
},

//////////////////Emotion/////////////////

{
  method: 'GET',
  url: '/api/Emotions',
  handler: EmotionController.getEmotions
},
{
  method: 'GET',
  url: '/api/Emotions/:id',
  handler: EmotionController.getSingleEmotion
},
{
  method: 'POST',
  url: '/api/Emotions',
  handler: EmotionController.addEmotion,
},
{
  method: 'PUT',
  url: '/api/Emotions/:id',
  handler: EmotionController.updateEmotion
},
{
  method: 'DELETE',
  url: '/api/Emotions/:id',
  handler: EmotionController.deleteEmotion
}
]

module.exports = routes
