const Book = require('../models/book');

module.exports = {
    create: (req, res) => {
        let newBook = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            Stock: req.body.stock
        });

        newBook.save((err) => {
            if (err) {
                res.status(500).json({err:err});
            } else {
                res.status(200).json(newBook);
            }
        })
    },

    showAll: (req, res) => {
        Book.find((err, books) => {
            if (err) {
                res.status(500).json({err:err});
            } else {
                res.status(200).json(books);
            }
        });
    },

    update: (req, res) => {
        Book.updateOne({_id: req.params.id}, {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            Stock: req.body.stock
        }, (err) => {
            if (err) {
                res.status(500).json({err:err});
            } else {
                res.status(200).json({
                    message: `${req.params.id} has been updated`
                });
            }
        });
    },

    delete: (req, res) => {
        Book.deleteOne({_id: req.params.id},(err) => {
            if (err) {
                res.status(500).json({err:err});
            } else {
                res.status(200).json({
                    message: `${req.params.id} has been deleted`
                });
            }
        });
    }, 

    findById: (req, res) => {
        Book.findById(req.params.id, (err, book) => {
            if (err) {
                res.status(500).json({err:err});
            } else {
                res.status(200).json(book);
            }
        })
    }
};
