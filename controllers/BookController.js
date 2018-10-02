'use strict'

const Book = require('../models/book')

class BookController{
    
    //create new book record
    static createBook(req,res){
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
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

    // get list of books
    static getListOfBooks(req,res){
        Book.find({})
            .then(books=>{
                res.status(200).json({
                    msg: 'List of Books',
                    data: books
                })
            })
            .catch(error=>{
                res.status(500).json({
                    msg: 'ERROR: ',error
                })
            })
    }

    //edit book information
    static updateBookById(req,res){
        Book.findOneAndUpdate({
            _id: req.params.id
        },{
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: Number(req.body.stock)
        })
        .then(book=>{
            res.status(200).json({
                msg: 'Book has been updated',
                data: book
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // delete book information
    static deleteBookById(req,res){
        Book.findOneAndRemove({
            _id: req.params.id
        })
        .then(book =>{
            res.status(200).json({
                msg: 'Book has been deleted',
                data: book
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }
}

module.exports = BookController