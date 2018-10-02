const Book = require('../models/book.js');

class BookController {
    static add(req, res) {
        const book = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        });
        book.save()
            .then(function(book) {
                console.log('book added');
                res.status(200).json(book);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static getAll(req, res) {
        Book.find().exec()
            .then(function(books) {
                res.status(200).json(books);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static getOne(req, res) {
        Book.findById(req.params.id).exec()
            .then(function(book) {
                res.status(200).json(book);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static edit(req, res) {
        Book.update({_id: req.params.id}, {$set: {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }}).exec()
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static delete(req, res) {
        Book.remove({_id: req.params.id}).exec()
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }
}

module.exports = BookController;