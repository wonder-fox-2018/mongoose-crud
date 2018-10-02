var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('HELO FROM HOME')
});

module.exports = router;
