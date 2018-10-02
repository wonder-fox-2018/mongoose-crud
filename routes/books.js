var express = require('express');
var router = express.Router();
const BookController=require('../controllers/bookController')

router.get('/', BookController.showAll );
router.post('/', BookController.createData );
router.put('/:id', BookController.updateData );
router.delete('/:id', BookController.deleteData );


module.exports = router;