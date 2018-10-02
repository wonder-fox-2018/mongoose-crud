import app from 'express'
import transaction from '../controllers/transactionController'

const { findTransactionById, findAllTransaction, createTransaction, updateTransaction, removeTransaction } = transaction
const route = app.Router()

route
  .get('/:id', findTransactionById)
  .get('/', findAllTransaction)
  .post('/', createTransaction)
  .put('/:id', updateTransaction)
  .delete('/:id', removeTransaction)

export default route
