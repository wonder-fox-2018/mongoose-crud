var express = require('express');
var router = express.Router();
const books = require('./books');
const customers = require('./customers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('home')
});

router.use('/books', books);

router.use('/customers', customers);


module.exports = router;
