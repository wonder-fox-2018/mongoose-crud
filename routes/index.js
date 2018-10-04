var express = require('express');
var router = express.Router();
const books = require('./books');
const customers = require('./customers');
const transactions = require('./transactions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('home')
});

router.use('/books', books);

router.use('/customers', customers);

router.use('/transactions', transactions);


module.exports = router;
