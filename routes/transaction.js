const routes = require('express').Router()
const { findAll, findOne, insert, remove, update } = require('../controllers/transactionController')

routes.get('/', findAll)
routes.get('/:id', findOne)
routes.post('/', insert)
routes.put('/:id', update)
routes.delete('/:id', remove)

module.exports = routes