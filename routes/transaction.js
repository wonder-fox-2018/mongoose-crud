const transaction = require('express').Router();
const TransactionController = require('../controllers/transactions.js');

transaction.get('/', TransactionController.getAll);
transaction.post('/', TransactionController.add);
transaction.get('/:id', TransactionController.getOne);
transaction.put('/:id', TransactionController.edit);
transaction.delete('/:id', TransactionController.delete);

module.exports = transaction;
