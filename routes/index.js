const express = require('express');
const router = express.Router();
const booksRoute = require('./books')
const transactionRoute = require('./transaction')
const memberRoute = require('./members')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Belajar Mongoose dan MongoDb')
});

router.use('/books', booksRoute)
router.use('/transactions', transactionRoute)
router.use('/customers', memberRoute)

module.exports = router;
