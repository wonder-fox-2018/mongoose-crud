const Transaction = require('../models/transaction.js');

class TransactionController {
    static add(req, res) {
        Transaction.create(req.body, function(err, transaction) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(transaction);
            }
        });
    }

    static getAll(req, res) {
        Transaction.find().populate('member', 'name').populate('booklist', 'isbn')
            .exec()
            .then(function(transactions) {
                res.status(200).json(transactions);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static getOne(req, res) {
        Transaction.find({_id: req.params.id}).populate('member booklist')
            .exec()
            .then(function(transaction) {
                res.status(200).json(transaction);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static edit(req, res) {
        Transaction.update({_id: req.params.id}, {$set: req.body}).exec()
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }

    static delete(req, res) {
        Transaction.remove({_id: req.params.id}).exec()
            .then(function(result) {
                res.status(200).json(result);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    }
}

module.exports = TransactionController;