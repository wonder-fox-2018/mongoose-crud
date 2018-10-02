const express = require('express'),
      router = express.Router(),
      BookController = require('../controllers/book')

router
    .post('/add', BookController.create)
    .get('/', BookController.findAll)
    .post('/:id', BookController.update)
    .delete('/:id', BookController.remove)

module.exports = router