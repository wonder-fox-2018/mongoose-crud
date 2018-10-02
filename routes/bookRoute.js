import app from 'express'
import book from '../controllers/bookController'

const { findBookById, findAllBook, createBook, updateBook, removeBook } = book
const route = app.Router()

route
  .get('/:id', findBookById)
  .get('/', findAllBook)
  .post('/', createBook)
  .put('/:id', updateBook)
  .delete('/:id', removeBook)

export default route
