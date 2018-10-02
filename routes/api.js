const router = require('express').Router()
const bookController = require('../controllers/bookController.js')
const customerController = require('../controllers/customerController.js')
const transactionController = require('../controllers/transactionController.js')

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

router
.get('/transactions', transactionController.findAll)
.post('/transactions', transactionController.create)
.get('/transactions/:id', transactionController.findById)
.put('/transactions/:id', transactionController.update)
.delete('/transactions/:id', transactionController.delete)


module.exports = router