const routes = require('express').Router()
const { findAll, findOne, insert, update, remove, findBy } = require('../controllers/customerController')

routes.get('/', findAll)
routes.get('/:id', findBy)
routes.post('/', insert)
routes.put('/:id', update)
routes.delete('/:id', remove)

module.exports = routes