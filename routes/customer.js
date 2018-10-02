var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customerController')

router.post('/add',customerController.create)

router.get('/', customerController.read);

router.put('/:id',customerController.update)

router.delete('/:id',customerController.delete)

module.exports = router;