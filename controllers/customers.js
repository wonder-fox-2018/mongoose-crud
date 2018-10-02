const Customer = require('../models/customer.js');

class CustomerController {
    static add(req, res) {
        Customer.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, function(err, customer) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(customer);
            }
        });
    }

    static getAll(req, res) {
        Customer.find().exec()
            .then(function(customers) {
                res.status(200).json(customers);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static getOne(req, res) {
        Customer.findById(req.params.id).exec()
            .then(function(customer) {
                res.status(200).json(customer);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static edit(req, res) {
        Customer.update({_id: req.params.id}, {$set: {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }}).exec()
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static delete(req, res) {
        Customer.remove({_id: req.params.id}).exec()
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }
}

module.exports = CustomerController;