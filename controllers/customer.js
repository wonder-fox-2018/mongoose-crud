const CustomerModel = require('../models/customer')

class Controller {

    static create(req,res) {
        const customer = new CustomerModel({
            name:  req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })

        customer.save(function (err, customer) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: err
                })
            }
            else {
                console.log(customer);
                res.status(200).json({
                    message: `Customer ${req.body.name} has been added to database!`
                })
            }
        })
    }
    static findAll(req,res) {
        CustomerModel.find(function(err, customers) {
            if (err) {
                console.log(err);               
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    customers: customers
                })
            }
        })
    }

    static update(req,res) {
        CustomerModel.updateOne({_id: req.params.id }, {$set: {
            name:  req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }}, 
        function(err, customer) {
            if (err) {
                console.log(err);              
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    message: `Customer has been successfully updated.`
                })
            }
        })
    }

    static remove(req,res) {
        CustomerModel.deleteOne({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    message: `Customer has been successfully deleted!`
                })
            }
        })
    }
}

module.exports = Controller