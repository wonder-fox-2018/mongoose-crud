const Transaction = require('../models/transactionModel')
const { generateDueDate, generateFine } = require('../helpers/transactionHelper')

module.exports = {

    showAll: function (req, res) {
        Transaction.find()
        .populate('member')
        .populate('booklist')
        .then(data => {
            res.status(200).json({data: data})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    showOne: function (req, res) {
        Transaction.findById(req.params.id)
        .populate('member')
        .populate('booklist')
        .then(datum => {
            if (datum) {
                res.status(200).json({data: datum})
            } else {
                res.status(404).json({message: `There is currently no transaction with id: ${req.params.id}`})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    add: function (req, res) {
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: generateDueDate(req.body.out_date, req.body.days),
            in_date: req.body.in_date,
            fine: generateFine(req.body.out_date, req.body.in_date, req.body.days),
            booklist: req.body.booklist
        })
        .then(data => {
            res.status(201).json({message: `Transaction ${data._id} added`, data: data})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    edit: function (req, res) {
        if (!req.body.member || !req.body.days || !req.body.out_date || !req.body.in_date || !req.body.booklist) {
            res.status(500).json({message: 'You must input the value of every field in the transaction datum even if some values are unchanged'})
        } else {
            Transaction.updateOne({
                _id: req.params.id
            }, {
                member: req.body.member,
                days: req.body.days,
                out_date: req.body.out_date,
                due_date: generateDueDate(req.body.out_date, req.body.days),
                in_date: req.body.in_date,
                fine: generateFine(req.body.out_date, req.body.in_date, req.body.days),
                booklist: req.body.booklist
            })
            .then(() => {
                res.status(200).json({message: `Transaction with id: ${req.params.id} updated`})
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
        }
    },

    remove: function (req, res) {
        Transaction.deleteOne({
            _id: req.params.id
        })
        .then(() => {
            res.status(200).json({message: `Transaction with id: ${req.params.id} deleted`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}