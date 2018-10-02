import Book from '../models/bookModel'

export default {

  createBook (req, res) {
    let newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }

    let book = new Book(newBook)

    book.save()
      .then(data => {
        res.status(201).json({
          status: 'success',
          msg: data
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err.message
        })
      })
  },
  findAllBook (req, res) {
    Book.find()
      .then(data => {
        res.status(200).json({
          status: 'success',
          data: data
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  },
  removeBook (req, res) {
    Book.deleteOne({
      _id: req.params.id
    })
      .then(data => {
        res.status(200).json({
          status: 'success' 
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  },
  updateBook (req, res) {
    Book.update({ _id: req.params.id }, {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
     .then(data => {
       res.status(201).json({
         status: 'success',
         msg: 'updating data success'
       })
     })
     .catch(err =>{
       res.status(500).json({
         status: 'failed',
         msg: err
       })
     })
  },
  findBookById (req, res) {
    Book.find({
      _id: req.params.id
    })
      .then(book => {
        res.status(200).json({
          data: book
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  }
}