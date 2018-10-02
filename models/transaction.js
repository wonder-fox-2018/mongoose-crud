const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Customer = require('./customer');
const Book = require('./book');

const transactionSchema = new Schema({
    _id: ObjectId,
    member: {type: Schema.type.ObjectId, ref: Customer},
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    boooklist: [{type: Schema.type.ObjectId, ref: Book}]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;