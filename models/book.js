const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = Book = mongoose.model('Book', new Schema(
    {
        isbn : String,
        title : String,
        author : String,
        category : String,
        stock : Number
    }
))

