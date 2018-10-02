const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Transaction = new Schema({
    _id: ObjectId,
    member: {type: Schema.type.ObjectId, ref: mongoose.model('customers', Schema)},
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    boooklist: [{type: Schema.type.ObjectId, ref: mongoose.model('books', Schema)}]
});