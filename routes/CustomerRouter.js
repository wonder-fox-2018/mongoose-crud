'use strict'

const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/CustomerController')

// create customer data
router.post('/', (req,res) =>{
    CustomerController.createCustomer(req,res)
})


module.exports = router