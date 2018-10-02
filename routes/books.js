var express = require('express');
var router = express.Router();
const BookController = require('../controllers/bookController');

router.get('/', BookController.showAll);

router.post('/', BookController.create);

router.put('/:id', BookController.update);

router.delete('/:id', BookController.delete);

router.get('/:id', BookController.findById);

module.exports = router;