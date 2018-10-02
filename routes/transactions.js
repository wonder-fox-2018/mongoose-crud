var express = require('express');
var router = express.Router();
const TransactionController=require('../controllers/transactionController')

router.get('/', TransactionController.showAll );
router.post('/', TransactionController.createData );
router.put('/:id', TransactionController.updateData );
router.delete('/:id', TransactionController.deleteData );


module.exports = router;