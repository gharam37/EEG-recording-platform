// Import our Controllers
const UserController = require('../controllers/UserController')
const User = require('../models/User')

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
  }
]

module.exports = routes
