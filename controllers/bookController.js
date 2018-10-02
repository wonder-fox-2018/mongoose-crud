const Book = require('../models/book');

class Controller {

    static add(req,res){
        Book.create({ 
            isbn:  req.body.isbn,
            title:  req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
         }, function (err, newBook) {
            if (err) {
                res.status(400).json({
                    message : 'error add new book'
                })
            }else {
                res.status(200).json(newBook)
            }
          });
    }
}

module.exports = Controller;