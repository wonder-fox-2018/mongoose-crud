import app from 'express'
import user from '../controllers/userController'

const { createUser, findAllUser, updateUser, findUserById, removeUser } = user
const route = app.Router()

route
  .get('/:id', findUserById)
  .get('/', findAllUser)
  .post('/', createUser)
  .put('/:id', updateUser)
  .delete('/:id', removeUser)

export default route
