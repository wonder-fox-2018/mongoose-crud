var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

router.post('/add',bookController.create)

router.get('/', bookController.read);

router.put('/:id',bookController.update)

router.delete('/:id',bookController.delete)

module.exports = router;