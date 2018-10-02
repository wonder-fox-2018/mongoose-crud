const TransactionModel = require('../models/transaction')

class Controller {

    static create(req,res) {
        const transaction = new TransactionModel({
            member:  req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        })

        transaction.save(function (err, transaction) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: err
                })
            }
            else {
                console.log(transaction);
                res.status(200).json({
                    message: `Treansaction has been created!`
                })
            }
        })
    }
    static findAll(req,res) {
        TransactionModel.find(function(err, transactions) {
            if (err) {
                console.log(err);               
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    transactions: transactions
                })
            }
        })
    }

    static update(req,res) {
        TransactionModel.updateOne({_id: req.params.id }, {$set: {
            member:  req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }}, 
        function(err, transaction) {
            if (err) {
                console.log(err);              
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    message: `Transaction has been successfully updated.`
                })
            }
        })
    }

    static remove(req,res) {
        TransactionModel.deleteOne({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    message: `Data has been successfully deleted!`
                })
            }
        })
    }
}

module.exports = Controller