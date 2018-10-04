const Customer = require('../models/customer');

module.exports = {
    create: (req, res) => {
        let newCustomer = new Customer({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        });
        
        newCustomer.save((err) => {
            if (err) {
                res.status(500).json({err:err});
            } else {
                res.status(200).json(newCustomer);
            }
        });
    },

    showAll: (req, res) => {
       Customer.find({}, (err, customers) => {
           if (err) {
               res.status(500).json(err);
           } else {
               res.status(200).json(customers);
           }
       }) 
    },

    update: (req, res) => {
        Customer.updateOne({_id: req.params.id}, {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone 
        }, (err, raw) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({
                    message: `${req.params.id} has been updated`,
                    raw: raw
                });
            }
        });
    },

    delete: (req, res) => {
        Customer.deleteOne({_id: req.params.id}, (err) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({
                    message: `${req.params.id} has been deleted`
                });
            }
        });
    },

    findById: (req, res) => {
        Customer.findById(req.params.id, (err, customer) => {
            if (err) {
                res.status(500).json(err);
            } else {
                //null if not found
                res.status(200).json(customer);
            }
        });
    }
}
