var express = require('express');
var router = express.Router();
const {createBook, readBook, updateBook, deleteBook} = require('../controllers/book')

router.get('/', readBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)


module.exports = router;
