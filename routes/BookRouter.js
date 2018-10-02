'use strict'

const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')

// create a book record
router.post('/', (req,res)=>{
    BookController.createBook(req,res)
})

// get list of books
router.get('/lists', (req,res)=>{
    BookController.getListOfBooks(req,res)
})

// edit Book information
router.put('/:id', (req,res) =>{
    BookController.updateBookById(req,res)
})

// delete Book information
router.delete('/:id', (req,res) =>{
    BookController.deleteBookById(req,res)
})

module.exports = router