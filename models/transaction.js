var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = new Schema ({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    days:  {
        type: Number,
        required: true
      },
    out_date:  {
        type: Date,
        required: true
      },
    due_date:  {
        type: Date,
        required: true
      },
    in_date:  {
        type: Date,
        required: true
      },
    fine:  {
        type: Number,
        required: true
      },
    bookList: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction