const express = require('express'),
      router = express.Router(),
      CustomerController = require('../controllers/customer')


      router
      .post('/add', CustomerController.create)
      .get('/', CustomerController.findAll)
      .post('/:id', CustomerController.update)
      .delete('/:id', CustomerController.remove)
  
  module.exports = router