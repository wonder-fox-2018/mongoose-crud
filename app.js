require('dotenv').config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoute from './routes/userRoute'
import bookRoute from './routes/bookRoute'
import transactionRoute from './routes/transactionRoute'

const app = express()
const dbTesting = null
const dbProd = null
const dbDev = 'mongodb://localhost/mongoose-crud'
const port = process.env.HOST
const db = mongoose.connection
const mongooseNewParser = {useNewUrlParser: true}

dbTesting ? mongoose.connect('mongodb://localhost/testing', mongooseNewParser) 
  : dbProd ? mongoose.connect(dbProd, mongooseNewParser)
    : mongoose.connect(dbDev, mongooseNewParser)

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
    console.log('> DB Connected')
  })

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({extended: false}))
  .use('/users', userRoute)
  .use('/books', bookRoute)
  .use('/transactions', transactionRoute)

  .get('/', (req, res) => {
    res.status(200).json({
      msg: 'Server on'
    })
  })

  .listen(port, () => {
    console.log(`\n> Server running on port ${port}`)
  })
