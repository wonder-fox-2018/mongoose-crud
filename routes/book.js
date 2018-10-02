const book = require('express').Router();
const BookController = require('../controllers/books.js');

book.get('/', BookController.getAll);
book.post('/', BookController.add);
book.get('/:id', BookController.getOne);
book.put('/:id', BookController.edit);
book.delete('/:id', BookController.delete);

module.exports = book;
