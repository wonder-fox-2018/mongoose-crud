const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const app = express();
// const logger = require('morgan');
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('konnekt');
  
});

const routerBook = require('./routes/book'),
      routerTransaction = require('./routes/transaction'),
      routerCustomer = require('./routes/customer')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.use('/api/book', routerBook)
app.use('/api/customer', routerCustomer)
app.use('/api/transaction', routerTransaction)



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

module.exports = app;
