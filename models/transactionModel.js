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
	outdate: {
		type: Date,
		default: new Date()
    },
	duedate: Date,
	indate: {
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