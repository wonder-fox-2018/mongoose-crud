const router = require('express').Router()
const transController = require('../controllers/transaction')

router.get('/', transController.findAll)
router.post('/', transController.createTrans)
router.delete('/:id', transController.deleteTransaction)
router.put('/:id', transController.updateTransaction)

module.exports = router