'use strict'

const Transaction = require('../models/transaction')

class TransactionController{

    // create new transaction
    static createTransaction(req,res){
        Transaction.create({
            member: req.body.member,
            days: Number(req.body.days),
            fine: Number(req.body.fine),
            booklist: req.body.booklist
        })
        .then(transaction=>{
            res.status(200).json({
                msg: 'Transaction successfully created',
                data: transaction
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // get list of transactions
    static getListOfTransactions(req,res){
        Transaction.find({}).populate('booklist').populate('member')
        .then(transactions=>{
            res.status(200).json({
                msg: 'List of transactions',
                data: transactions
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // edit transaction data
    static updateTransactionDataById(req,res){
        Transaction.findOneAndUpdate({
            _id: req.params.id
        },{
            member: req.body.member,
            days: Number(req.body.days),
            fine: Number(req.body.fine),
            booklist: req.body.booklist
        })
        .then(transaction =>{
            res.status(200).json({
                msg: 'Transaction has been updated',
                data: transaction
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // delete transaction
    static deleteTransactionDataById(req,res){
        Transaction.findOneAndRemove({
            _id: req.params.id
        })
        .then(transaction =>{
            res.status(200).json({
                msg: 'Transaction has been deleted',
                data: transaction
            })
        })
        .catch(error =>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }
}

module.exports = TransactionController