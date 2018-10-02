var express = require('express');
var router = express.Router();

/* GET users listing. */
const Controller = require('../controllers/transaction')

router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.delete)

module.exports = router;
