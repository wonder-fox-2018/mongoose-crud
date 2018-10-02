var express = require('express');
var router = express.Router();

const books= require('./books')
const customers= require('./customers')
const transactions= require('./transactions')


router.use('/books',books);
router.use('/customers',customers);
router.use('/transactions',transactions);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
