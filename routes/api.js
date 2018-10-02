const router = require('express').Router()
const bookController = require('../controllers/bookController.js')
const customerController = require('../controllers/customerController.js')

// /api
router
.get('/books', bookController.findAll)
.post('/books', bookController.create)
.get('/books/:id', bookController.findById)
.put('/books/:id', bookController.update)
.delete('/books/:id', bookController.delete)

router
.get('/customers', customerController.findAll)
.post('/customers', customerController.create)
.get('/customers/:id', customerController.findById)
.put('/customers/:id', customerController.update)
.delete('/customers/:id', customerController.delete)


module.exports = router