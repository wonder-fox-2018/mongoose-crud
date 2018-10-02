const Book = require('../models/book')

module.exports = {
    createBook: (req, res) => {
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }, function(err, result) {
            if(err) res.status(500).json({err})
            else res.status(200).json({message: 'success add', result: result})
        })
    },
    readBook: (req, res) => {
        Book.find(function(err, result){
            if(err) res.status(500).json({err})
            else res.status(200).json({result: result})
        })
    },
    updateBook: (req, res) => {
        Book.update({_id: req.params.id},
            { $set: {
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            }}, function(err, result) {
            if(err) res.status(500).json({err})
            else res.status(200).json({message: 'success update', result: result})
        })
    },
    deleteBook: (req, res) => {
        Book.deleteOne({_id: req.params.id },
            function(err) {
                if(err) res.status(500).json({err})
                else res.status(200).json({message: 'success delete'})
            });

    }


}