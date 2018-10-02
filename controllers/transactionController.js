import Transaction from '../models/transactionModel'

export default {

  createTransaction (req, res) {
    let newTransaction = {
      member: req.body.member,
      days: req.body.days,
      fine: req.body.fine,
      booklist: req.body.booklist
    }

    let transaction = new Transaction(newTransaction)

    transaction.save()
      .then(data => {
        res.status(201).json({
          status: 'success',
          msg: data
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err.message
        })
      })
  },
  findAllTransaction (req, res) {
    Transaction.find()
      .populate('member', 'fullName')
      .populate('booklist', 'title')
      .then(data => {
        res.status(200).json({
          status: 'success',
          data: data
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  },
  removeTransaction (req, res) {
    Transaction.deleteOne({
      _id: req.params.id
    })
      .then(data => {
        res.status(200).json({
          status: 'success' 
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  },
  updateTransaction (req, res) {
    Transaction.update({ _id: req.params.id }, {
      member: req.body.member,
      days: req.body.days,
      fine: req.body.fine,
      booklist: req.body.booklist
    })
     .then(data => {
       res.status(201).json({
         status: 'success',
         msg: 'updating data success'
       })
     })
     .catch(err =>{
       res.status(500).json({
         status: 'failed',
         msg: err
       })
     })
  },
  findTransactionById (req, res) {
    Transaction.find({
      _id: req.params.id
    })
      .populate('member', 'fullName')
      .populate('booklist', 'title')
      .then(transaction => {
        res.status(200).json({
          data: transaction
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  }
}