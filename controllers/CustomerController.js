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
}

module.exports = CustomerController