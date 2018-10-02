const Customer = require('../models/customer')

module.exports = {
    findAll: function(req, res) {
        Customer.find({}, function(err, result){
            if(err) console.log(err);
            console.log(result)
            res.status(200).json(result)
        })
    },
    create: function(req, res) {
        Customer.create({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone 
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    update: function(req, res) {
        Customer.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone         
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    delete: function(req, res) {
        Customer.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    }
}