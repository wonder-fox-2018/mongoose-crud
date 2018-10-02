const Book = require('../models/book')
// const ObjId   = require('mongodb').ObjectId

module.exports = {

  findAll: function (req, res) {
    Book.find()
    .then((books) => {
      res.status(201).json({
        books
      })
    })
    .catch((err) => {
      res.status(500).json({
        errors: err
      })
    })
  },

  findBy: function (req, res) {
    Book.findById(req.params.id)
    .then((book) => {
      res.status(201).json({
        book
      })
    })
    .catch((err) => {
      res.status(201).json({
        errors: err
      })
    })
  },

  insert: function (req, res) {
    const dataBook = new Book ({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })

    dataBook.save()
    .then((books) => {
      res.status(200).json({
        message: `insert book success`,
        books
      })
    })
    .catch((err) => {
      res.status(500).json({
        errors: err
      })
    })

    // Book.create(array, function (err, data) {
    //   if (!err) {
    //     res.status(200).json({
    //       message: `insert book success`
    //     })
    //   } else {
    //     res.status(500).json({
    //       error: err.message
    //     })
    //   }
    // });
  },

  update: function (req, res) {
    Book.update(
      { _id : req.params.id}, 
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
      .then((book) => {
        res.status(201).json({
          book,
          message: 'update book success'
        })
      })
      .catch((err) => {
        res.status(404).json({
          message: 'update book failed'
        })
      })
  },

  remove: function (req, res) {
    Book.findByIdAndRemove(req.params.id)
    .then((book) => {
      res.status(200).json({
        book,
        message: 'delete book success'
      })
    })
  }
}