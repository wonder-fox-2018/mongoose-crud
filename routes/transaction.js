var express = require('express');
var router = express.Router();
const {createTrans, readTrans, updateTrans, deleteTrans} = require('../controllers/transaction')

router.get('/', readTrans)
router.post('/', createTrans)
router.put('/:id', updateTrans)
router.delete('/:id', deleteTrans)

module.exports = router