const Transaction = require('../models/transaction')

module.exports = {
    readTrans: (req, res) => {
        Transaction.find({}).populate('bookList member').exec(function(err, result){
            if(err) res.status(500).json({err: err})
            else res.status(200).json({message: result})
        })
    },
    createTrans: (req, res) => {
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: new Date (req.body.out_date),
            due_date: new Date (req.body.due_date),
            in_date: new Date (req.body.in_date),
            fine: req.body.fine,
            bookList: req.body.bookList
        }, function(err, result){
            if(err) res.status(500).json({err: err})
            else res.status(200).json({message: 'create Success', result: result})
        })
    },
    updateTrans: (req, res) => {
        console.log(req.params.id);
        
        Transaction.updateOne(
            {_id: req.params.id},
            {$set: {
                member: req.body.member,
                days: req.body.days,
                out_date: new Date (req.body.out_date),
                due_date: new Date (req.body.due_date),
                in_date: new Date (req.body.in_date),
                fine: req.body.fine,
                bookList: req.body.bookList
            }}, function(err, result){
                if(err) res.status(500).json({err: err})
                else res.status(200).json({message: 'Update Success', result: result})
            }
        )
    },
    deleteTrans: (req, res) => {
        Transaction.deleteOne({
            _id: req.params.id
        }, function(err){
            if(err) res.status(500).json({err: err})
            else res.status(200).json({message: 'Delete Success'})
        })
    }
}