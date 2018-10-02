const router = require('express').Router()
const bookController = require('../controllers/book')

router.get('/', bookController.findAll)
router.post('/', bookController.createBook)
router.delete('/:id', bookController.deleteBook)
router.put('/:id', bookController.updateBook)


module.exports = router