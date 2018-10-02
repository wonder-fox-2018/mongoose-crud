const express = require('express'),
      router = express.Router(),
      TransactionController = require('../controllers/transaction')


      router
      .post('/add', TransactionController.create)
      .get('/', TransactionController.findAll)
      .post('/:id', TransactionController.update)
      .delete('/:id', TransactionController.remove)
  
  module.exports = router