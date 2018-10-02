const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = Transaction = mongoose.model('Transaction', new Schema(
    {
        member : String,
        days : Number,
        out_date : Date,
        due_date : Date,
        in_date : Date,
        fine : Number,
        booklist : [{
            type : Schema.Types.ObjectId, ref: 'Book'
        }]
    }
))