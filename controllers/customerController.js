const Customer = require('../models/customer');

class Controller {
    static create(req,res){
        Customer.create({ 
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
         }, function (err, newCustomer) {
            if (err) {
                res.status(400).json({
                    message : 'error add new Customer'
                })
            }else {
                res.status(200).json(newCustomer)
            }
          });
    }

    static read(req,res){
        Customer.find({}, function (err, docs) {
            if(err){
                res.status(400).json({
                    message : 'error read all Customer data'
                })
            }else{
                res.json(docs)
            }
        });
    }

    static update(req,res){
        Customer.updateOne({_id : req.params.id},{$set:{
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }}, function(err, update) {
            if(err){
                res.status(400).json({
                    message : 'update error'
                })
            }else{
                res.status(200).json(req.body)
            }
        });
    }
    
    static delete(req,res){
        Customer.deleteOne({_id : req.params.id},function(err,r){
            if(err){
                res.status(400).json({
                    message : `failed to delete ${req.params.id}`
                })
            }else{
                res.status(200).json({
                    message : `delete ${req.params.id} success`
                })
            }
        })
    }
}

module.exports = Controller;