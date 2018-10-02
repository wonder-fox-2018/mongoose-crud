var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  member : { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  days : Number,
  out_date : { type: Date, default: Date.now },
  due_date : Date,
  in_date : Date,
  fine: Number,
  booklist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
