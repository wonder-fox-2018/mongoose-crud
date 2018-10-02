'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/librarymongoosecruddb', {useNewUrlParser: true})

const BookRouter = require('./routes/BookRouter')
const CustomerRouter = require('./routes/CustomerRouter')
const TransactionRouter = require('./routes/TransactionRouter')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use('/books', BookRouter)
app.use('/customers', CustomerRouter)
app.use('/transactions', TransactionRouter)

app.get('/',(req,res)=>{
    res.send('Base Set Up OK')
})

app.listen(3003, ()=>{
    console.log('You are listening to PORT 3003')
})