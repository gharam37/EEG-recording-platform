// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
const routes = require('./routes')
routes.forEach((route, index) => {
 fastify.route(route)
})
const cors = require('cors')
fastify.use(cors())
// Require external modules
const mongoose = require('mongoose')
// Connect to DB
mongoose.connect('mongodb://localhost/Metadata')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3030)
    fastify.swagger()
    fastify.log.info(`listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
