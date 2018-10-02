var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 3000
var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var transactionsRouter = require('./routes/transactions');
var customersRouter = require('./routes/customers');
require('dotenv').config()

var app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.dburl, { useNewUrlParser: true });
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/transactions', transactionsRouter);
app.use('/customers', customersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, ()=>{
  console.log('listening on port:', port)
})

module.exports = app;
