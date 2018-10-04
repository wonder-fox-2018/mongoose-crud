const router = require('express').Router();
const TransactionController = require('../controllers/transactionController');

router.get('/', TransactionController.showAll);

router.post('/', TransactionController.create);

router.delete('/:id', TransactionController.delete);

router.get('/:id', TransactionController.findById);

router.put('/:id', TransactionController.update);

module.exports = router;