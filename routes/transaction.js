var express = require('express');
var router = express.Router();
const transactionController = require('../controllers/transactionController')


router.post('/add',transactionController.create)
router.get('/',transactionController.read)

router.delete('/:id',transactionController.delete)


module.exports = router;