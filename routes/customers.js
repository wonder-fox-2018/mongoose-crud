var express = require('express');
var router = express.Router();
const CustomerController=require('../controllers/customerController')

router.get('/', CustomerController.showAll );
router.post('/', CustomerController.createData );
router.put('/:id', CustomerController.updateData );
router.delete('/:id', CustomerController.deleteData );


module.exports = router;