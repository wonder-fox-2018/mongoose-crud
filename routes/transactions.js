const router = require('express').Router();
const { showAll, showOne, add, edit, remove } = require('../controllers/transactionController')

router.get('/', showAll)
router.get('/:id', showOne)
router.post('/', add)
router.put('/:id', edit)
router.delete('/:id', remove)

module.exports = router;