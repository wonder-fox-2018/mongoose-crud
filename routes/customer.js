const customer = require('express').Router();
const CustomerController = require('../controllers/customers.js');

customer.get('/', CustomerController.getAll);
customer.post('/', CustomerController.add);
customer.get('/:id', CustomerController.getOne);
customer.put('/:id', CustomerController.edit);
customer.delete('/:id', CustomerController.delete);

module.exports = customer;
