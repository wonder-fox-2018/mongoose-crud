const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    isbn : String,
    title : String,
    author : String,
    category : String,
    stock : Number
})

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel



