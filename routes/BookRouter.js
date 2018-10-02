'use strict'

const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')

// create a book record
router.post('/', (req,res)=>{
    BookController.createBook(req,res)
})


module.exports = router