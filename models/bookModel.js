import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
  isbn : {
    type: String,
    required: true
  },
  title : {
    type: String,
    required: true
  },
  author : {
    type: String,
    required: true
  },
  category : {
    type: String,
    required: true
  },
  stock : Number
}, {
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

export default Book