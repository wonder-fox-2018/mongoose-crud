'use strict'

const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/CustomerController')

// create customer data
router.post('/', (req,res) =>{
    CustomerController.createCustomer(req,res)
})

// get lists of customer
router.get('/lists', (req,res) =>{
    CustomerController.getListOfCustomers(req,res)
})

// update customer data
router.put('/:id', (req,res) =>{
    CustomerController.updateCustomerById(req,res)
})

// delete customer data
router.delete('/:id', (req,res)=>{
    CustomerController.deleteCustomerById(req,res)
})

module.exports = router