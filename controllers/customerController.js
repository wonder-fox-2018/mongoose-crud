const Customer = require('../models/customer.js')

module.exports = {

    findAll : (req,res)=>{
        Customer.find({}, (err, customer)=>{
            if(!err) res.status(200).json({
                data : customer
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    findById : (req,res)=>{
        Customer.findById(req.params.id,(err, customer)=>{
            if(!err) res.status(200).json({
                data : customer
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    create : (req,res)=>{
        Customer.create({
            name : req.body.name,
            memberid : req.body.memberid,
            address : req.body.address,
            zipcode : req.body.zipcode,
            phone : req.body.phone
        }, (err, result)=>{
            if(!err) res.status(200).json({
                data : result
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    update : (req,res)=>{
        Customer.findByIdAndUpdate(req.params.id, {
            name : req.body.name,
            memberid : req.body.memberid,
            address : req.body.address,
            zipcode : req.body.zipcode,
            phone : req.body.phone
        },(err, result)=>{
            if(!err) res.status(200).json({
                OldData : result
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    delete : (req,res)=>{
        Customer.deleteOne({
            _id : req.params.id
        },(err,result)=>{
            if(!err) res.status(200).json({
                data : result
            })
            else res.status(500).json({
                errors : err
            })
        })
    }


}