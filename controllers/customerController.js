const Customer = require('../models/customer.js')

module.exports = {

    findAll : (req,res)=>{
        Customer.find({})
        .then((customers) => {
            res.status(200).json({data : customers})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    findById : (req,res)=>{
        Customer.findById(req.params.id)
        .then((customer) => {
            res.status(200).json({data : customer})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    create : (req,res)=>{

        let {name,memberid,address,zipcode,phone} = req.body

        Customer.create(new Customer({name,memberid,address,zipcode,phone}))
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    update : (req,res)=>{

        let {name,memberid,address,zipcode,phone} = req.body
        
        Customer.findByIdAndUpdate(req.params.id, {name,memberid,address,zipcode,phone})
        .then((result) => {
            return Customer.findById(req.params.id)
        })
        .then((newObj)=>{
            res.status(200).json({data : newObj})
        })
        .catch((err) => {
            res.status(500).json({errors : err})  
        })

    },

    delete : (req,res)=>{
        Customer.deleteOne({_id : req.params.id})
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    }


}