const BookModel = require('../models/book')

class Controller {

    static create(req,res) {
        const book = new BookModel({
            isbn:  req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })

        book.save(function (err, book) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: err
                })
            }
            else {
                console.log(book);
                res.status(200).json({
                    message: `Book ${req.body.title} has been created!`
                })
            }
        })
    }
    static findAll(req,res) {
        BookModel.find(function(err, books) {
            if (err) {
                console.log(err);               
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    books: books
                })
            }
        })
    }

    static update(req,res) {
        BookModel.updateOne({_id: req.params.id }, {$set: {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }}, 
        function(err, book) {
            if (err) {
                console.log(err);              
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    message: `${req.body.title} has been successfully updated.`
                })
            }
        })
    }

    static remove(req,res) {
        BookModel.deleteOne({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    message: `Data has been successfully deleted!`
                })
            }
        })
    }
}

module.exports = Controller