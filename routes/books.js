const express = require('express'),
    router = express.Router(),
    { list, insert, update, remove } = require('../controllers/books');

/* GET books listing. */
router
    .get('/', list)
    
    .post('/', insert)

    .put('/:id', update)

    .delete('/:id', remove)

module.exports = router;
