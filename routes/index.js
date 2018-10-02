var express = require('express');
var router = express.Router();
const books = require('./books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('home')
});

router.use('/books', books);



module.exports = router;
