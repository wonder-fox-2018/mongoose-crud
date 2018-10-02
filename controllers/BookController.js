'use strict'

const Book = require('../models/book')

class BookController{
    
    //create new book record
    static createBook(req,res){
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.author,
            stock: Number(req.body.stock)
        })
        .then(book=>{
            res.status(200).json({
                msg: 'Book has been successfully created',
                data: book
            })
        })
        .catch(error=>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }
}

module.exports = BookController