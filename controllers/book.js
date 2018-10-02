const Book = require('../models/book')

module.exports = {
    findAll: function(req, res) {
        Book.find({}, function(err, result){
            if(err) console.log(err);
            console.log(result)
            res.status(200).json(result)
        })
    },
    create: function(req, res) {
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: parseInt(req.body.stock) 
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    update: function(req, res) {
        Book.findByIdAndUpdate(req.params.id, {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: parseInt(req.body.stock)        
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    delete: function(req, res) {
        Book.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    }
}