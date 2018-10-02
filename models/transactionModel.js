const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
	member: {
		type: Schema.Types.ObjectId,
		ref: 'Customer'
	},
	days: {
        type: Number,
        required: true
    },
	out_date: {
		type: Date,
		default: new Date()
    },
	due_date: Date,
	in_date: {
        type: Date,
        required: true
    },
	fine: Number,
	booklist: [{
		type: Schema.Types.ObjectId,
		ref: 'Book'
	}]
}, {
	timestamps: true
});
const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction