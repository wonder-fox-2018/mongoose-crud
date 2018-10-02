const express = require('express');
const router = express.Router();

const Transaction = require('../controllers/transaction')

router.get('/', Transaction.show)
router.get('/populate',Transaction.showData)
router.post('/', Transaction.create)

router.get('/:id', Transaction.findbyId)

router.put('/:id', Transaction.update)
router.patch('/:id', Transaction.update)

router.delete('/:id', Transaction.remove)

module.exports = router
