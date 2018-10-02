'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/librarymongoosecruddb', {useNewUrlParser: true})

const BookRoutes = require('./routes/BookRouter')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use('/books', BookRoutes)

app.get('/',(req,res)=>{
    res.send('Base Set Up OK')
})

app.listen(3003, ()=>{
    console.log('You are listening to PORT 3003')
})