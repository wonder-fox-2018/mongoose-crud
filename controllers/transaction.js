const Transaction = require('../models/transaction')

module.exports = {
    findAll: function(req, res) {
        Transaction.find({})
        .populate('member')
        .populate('booklist')
        .exec(function(err, result){
            if(err) console.log(err);
            console.log(result)
            res.status(200).json(result)
        })
        
    },
    create: function(req, res) {
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    update: function(req, res) {
        Transaction.findByIdAndUpdate(req.params.id, {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist      
        })
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    delete: function(req, res) {
        Transaction.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        });
    }
}