var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wonder-mongoose-crud', {useNewUrlParser: true});

var booksRouter = require('./routes/books');
var customersRouter = require('./routes/customers');
var transactionsRouter = require('./routes/transactions');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/books', booksRouter);
app.use('/customers', customersRouter);
app.use('/transactions', transactionsRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
