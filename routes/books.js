var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('HELO FROM BOOKS')
});

router.post('/add',bookController.add)

module.exports = router;