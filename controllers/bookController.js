const Book = require('../models/bookModel')

module.exports = {

    showAll: function (req, res) {
        Book.find()
        .then(data => {
            res.status(200).json({data: data})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    showOne: function (req, res) {
        Book.findById(req.params.id)
        .then(datum => {
            if (datum) {
                res.status(200).json({data: datum})
            } else {
                res.status(404).json({message: `There is currently no book with id: ${req.params.id}`})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    add: function (req, res) {
        Book.init()
        .then(() => {
            Book.create({
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            })
            .then(data => {
                res.status(201).json({message: `Book '${req.body.title}' added`, data: data})
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    editAll: function (req, res) {
        if (!req.body.isbn || !req.body.title || !req.body.author || !req.body.category || !req.body.stock) {
            res.status(500).json({message: 'PUT /books/:id is used to change every field in the book datum, to change only some of the fields, use PATCH /books/:id'})
        } else {
            Book.updateOne({
                _id: req.params.id
            }, {
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            })
            .then(() => {
                res.status(200).json({message: `Book with id: ${req.params.id} updated`})
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
        }
    },

    editSome: function (req, res) {
        let toBeUpdated = {}
        if (req.body.isbn) {
            toBeUpdated.isbn = req.body.isbn
        }
        if (req.body.title) {
            toBeUpdated.title = req.body.title
        }
        if (req.body.author) {
            toBeUpdated.author = req.body.author
        }
        if (req.body.category) {
            toBeUpdated.category = req.body.category
        }
        if (req.body.stock) {
            toBeUpdated.stock = req.body.stock
        }
        Book.updateOne({
            _id: req.params.id
        }, toBeUpdated)
        .then(() => {
            res.status(200).json({message: `Book with id: ${req.params.id} updated`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    remove: function (req, res) {
        Book.deleteOne({
            _id: req.params.id
        })
        .then(() => {
            res.status(200).json({message: `Book with id: ${req.params.id} deleted`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}