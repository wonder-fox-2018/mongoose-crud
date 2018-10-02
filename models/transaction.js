'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    days: Number,
    out_date: {
        type: Date,
        default: new Date()
    },
    due_date: {
        type: Date,
        default: new Date()
    },
    in_date: {
        type: Date,
        default: new Date ()
    },
    fine: Number,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
},{
    timestamps: true
})

const Transaction = mongoose.model('Transaction', TransactionSchema)
module.exports = Transaction