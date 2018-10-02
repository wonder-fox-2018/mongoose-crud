import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'User' },
  days: Number,
  outDate: {
    type: Date,
    default: Date()
  },
  dueDate: {
    type: Date,
    default: Date()
  },
  inDate: {
    type: Date,
    default: Date()
  },
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction