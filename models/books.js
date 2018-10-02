const mongoose = require('mongoose'),
     Schema = mongoose.Schema;

const bookScheme = new Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: String,
    stock: Number
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookScheme)
module.exports = Book