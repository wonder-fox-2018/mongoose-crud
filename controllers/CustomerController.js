'use strict'

const Customer = require('../models/customer')

class CustomerController{

    // create new customer
    static createCustomer(req,res){
        Customer.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        .then(customer=>{
            res.status(200).json({
                msg: 'Customer data created',
                data: customer
            })
        })
        .catch(error=>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // get list of customers
    static getListOfCustomers(req,res){
        Customer.find({})
         .then(customers =>{
            res.status(200).json({
                msg: 'List of customers',
                data: customers
            })
         })
         .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
         })
    }

    // update customer data
    static updateCustomerById(req,res){
        Customer.findOneAndUpdate({
            _id: req.params.id
        },{
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        .then(customer =>{
            res.status(200).json({
                msg: 'Customer data has been updated',
                data: customer
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // delete customer data
    static deleteCustomerById(req,res){
        Customer.findOneAndRemove({
            _id: req.params.id
        })
        .then(customer =>{
            res.status(200).json({
                msg: 'Customer data has been deleted',
                data: customer
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }
}

module.exports = CustomerController