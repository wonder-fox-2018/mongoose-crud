var express = require('express');
var router = express.Router();
const CustomerController = require('../controllers/customerController');

router.post('/', CustomerController.create);

router.get('/', CustomerController.showAll);

router.put('/:id', CustomerController.update);

router.delete('/:id', CustomerController.delete);

router.get('/:id', CustomerController.findById);

module.exports = router;