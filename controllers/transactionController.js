const Transaction = require('../models/transaction.js')

module.exports = {

    findAll : (req,res)=>{
        Transaction.find({}).populate('member booklist').exec()
        .then((transactions) => {
            res.status(200).json({data : transactions})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    findById : (req,res)=>{
        Transaction.findById(req.params.id)
        .then((transaction) => {
            res.status(200).json({data : transaction})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    create : (req,res)=>{
        
        let {member,days,out_date,due_date,in_date,fine,booklist} = req.body

        Transaction.create(new Transaction({member,days,out_date,due_date,in_date,fine,booklist}))
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    update : (req,res)=>{

        let {member,days,out_date,due_date,in_date,fine,booklist} = req.body
        
        Transaction.findByIdAndUpdate(req.params.id, {member,days,out_date,due_date,in_date,fine,booklist})
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });

    },

    delete : (req,res)=>{
        Transaction.deleteOne({_id : req.params.id})
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    }


}