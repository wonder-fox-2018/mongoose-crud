const router = require('express').Router()
const memberController = require('../controllers/member')

router.get('/', memberController.findAll)
router.post('/', memberController.createMember)
router.delete('/:id', memberController.deleteMember)
router.put('/:id', memberController.updateMember)

module.exports = router