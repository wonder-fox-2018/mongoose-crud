const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./routes/index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/library', router);

app.listen(port, function(req, res) {
    console.log('Listening on port', port);
});