var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  isbn:  String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

var Book = mongoose.model('Book', blogSchema);

module.exports = Book