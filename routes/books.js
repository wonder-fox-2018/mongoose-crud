const router = require('express').Router();
const { showAll, showOne, add, editAll, editSome, remove } = require('../controllers/bookController')

router.get('/', showAll)
router.get('/:id', showOne)
router.post('/', add)
router.put('/:id', editAll)
router.patch('/:id', editSome)
router.delete('/:id', remove)

module.exports = router;