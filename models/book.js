const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Book = new Schema({
    _id: ObjectId,
    isbn: String,
    title: String,
    author: String,
    category: String,
    Stock: Number
});