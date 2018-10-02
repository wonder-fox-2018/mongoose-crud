const Customer = require('../models/customer')

module.exports = {
    createCust: (req, res) => {
        Customer.create({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, function(err, result){            
            if(err) res.status(500).json({err})
            else res.status(200).json({message: 'Success add', result: result})
        })
    },
    readCust: (req, res) => {
        Customer.find(function(err, result){
            if(err) res.status(500).json({err})
            else res.status(200).json({result: result})
        })
    },
    updateCust: (req, res) => {
        Customer.updateOne({_id: req.params.id},
            {$set: {
                name: req.body.name,
                memberId: req.body.memberId,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            }}, function(err, result) {
                if(err) res.status(500).json({err})
                else res.status(200).json({message: 'Success update',result: result})
            })
    },
    deleteCust: (req, res) => {
        Customer.deleteOne({_id: req.params.id}, function(err){
            if(err) res.status(500).json({err})
            else res.status(200).json({message: 'Success delete'})
        })
    }
}