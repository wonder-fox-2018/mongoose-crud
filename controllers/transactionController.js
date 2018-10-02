const Transaction = require('../models/transaction')

module.exports = {

  findAll: function (req, res) {
    Transaction.find()
    .populate('member')
    .populate('booklist')
      .then((transaction) => {
        res.status(200).json({
          transaction
        })
      }).catch((err) => {
        res.status(500).json({
          errors: err
        })
      })
  },

  findOne: function (req, res) {
    Transaction.findById(req.params.id)
    .populate('member')
    .populate('booklist')
      .then((transaction) => {
        res.status(200).json({
          transaction
        })
      }).catch((err) => {
        res.status(500).json({
          errors: err
        })
      })
  },

  insert: function (req, res) {

    let dataTransaction = new Transaction({
      member: req.body.member,
      days: req.body.days,
      out_date: new Date(req.body.out_date),
      due_date: new Date(req.body.due_date),
      in_date: new Date(req.body.in_date),
      fine: req.body.fine,
      booklist: req.body.booklist
    })

    dataTransaction.save()
      .then((transactions) => {
        res.status(200).json({
          message: 'insert transaction success',
          transactions
        })
      }).catch((err) => {
        res.status(500).json({
          message: 'insert transaction failed',
          errors: err
        })
      })

  },

  update: function (req, res) {
    let dataTransaction = {
      member: req.body.member,
      days: req.body.days,
      out_date: new Date(req.body.out_date),
      due_date: new Date(req.body.due_date),
      in_date: new Date(req.body.in_date),
      fine: req.body.fine,
      booklist: req.body.booklist
    }
    
    Transaction.update(
      { _id : req.params.id},
      dataTransaction
    )
    .then((transactions) => {
      res.status(200).json({
        message: 'update transaction success',
        transactions
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'update transaction failed',
        errors: err
      })
    })
    
  },

  remove: function (req, res) {
    Transaction.remove(
      { _id : req.params.id}
    )
    .then((transaction) => {
      res.status(200).json({
        message: 'remove transaction success',
        transaction
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'remove transaction failed',
        errors: err
      })
    })
  }
}