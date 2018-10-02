'use strict'

const express = require('express')
const router = express.Router()
const TransactionController = require('../controllers/TransactionController')

// create transaction
router.post('/', (req,res)=>{
    TransactionController.createTransaction(req,res)
})

// get list of transactions
router.get('/lists', (req,res)=>{
    TransactionController.getListOfTransactions(req,res)
})

// update transaction
router.put('/:id', (req,res)=>{
    TransactionController.updateTransactionDataById(req,res)
})

// delete transaction
router.delete('/:id', (req,res) =>{
    TransactionController.deleteTransactionDataById(req,res)
})

module.exports = router