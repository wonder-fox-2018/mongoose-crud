const createError = require('http-errors'),
      express = require('express'),
      app = express(),
      bodyParser = require('body-parser')

const indexRouter = require('./routes/index'),
      booksRouter = require('./routes/books'),
      customersRouter = require('./routes/customers'),
      transactionsRouter = require('./routes/transactions')

const mongoose = require('mongoose'),
     url = 'mongodb://localhost:27017/library'

mongoose.connect(url,{ useNewUrlParser: true })

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('We are connected')
})

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

app
  .use('/', indexRouter)
  .use('/books', booksRouter)
  .use('/customers', customersRouter)
  .use('/transactions', transactionsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
