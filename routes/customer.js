var express = require('express');
var router = express.Router();
const {createCust, readCust, updateCust, deleteCust} = require('../controllers/customer')

router.get('/', readCust)
router.post('/', createCust)
router.put('/:id', updateCust)
router.delete('/:id', deleteCust)

module.exports = router