const router = require('express').Router();
const book = require('./book.js');
const customer = require('./customer.js');
const transaction = require('./transaction.js');

router.get('/', function(req, res) {
    res.send('Welcome to ....!');
});

router.use('/books', book);
router.use('/customers', customer);
router.use('/transactions', transaction);

module.exports = router;