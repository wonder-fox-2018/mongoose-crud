const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

module.exports = Book = mongoose.model('Book', new Schema(
    {
        isbn : {
            type :String,
            required:[true, 'isbn required'],
            unique : true
        },
        title : {
            type :String,
            required:[true, 'title please']
        },
        author : String,
        category : String,
        stock : Number
    }
).plugin(uniqueValidator))

