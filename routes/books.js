var express = require('express');
const router = express.Router();
const Controller = require('../controllers/book')

router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)

module.exports = router