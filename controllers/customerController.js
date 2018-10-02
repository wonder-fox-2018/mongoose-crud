const Customer = require('../models/customer')

module.exports = {
  findAll: function (req, res) {
    Customer.find()
    .then((customers) => {
      res.status(201).json({
        customers
      })
    })
    .catch((err) => {
      res.status(404).json({
        errors: err,
        message: 'customer not found'
      })
    })
  },

  findBy: function (req, res) {

    Customer.findById(req.params.id)
    .then((customer) => {
      res.status(201).json({
        customer
      })
    })
    .catch((err) => {
      res.status(404).json({
        errors: err,
        message: 'customer not found'
      })
    })

  },

  insert: function (req, res) {
    let dataUser = new Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })

    dataUser.save()
    .then((customers) => {
      res.status(201).json({
        message: 'insert customer success',
        customers
      })
    })
    .catch((err) => {
      res.status(500).json({
        errors: err,
        message: 'insert customer failed'
      })
    })

  },

  update: function (req, res) {
    let dataUser = {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }

    Customer.update(
      {_id : req.params.id},
      dataUser
    )
    .then((customer) => {
      res.status(201).json({
        customer,
        message: 'update data customer success'
      })
    })
    .catch((err) => {
      res.status(404).json({
        errors: err,
        message: 'update data customer failed'
      })
    })

    
  },

  remove: function (req, res) {
    Customer.remove({_id : req.params.id})
    .then((customer) => {
      res.status(201).json({
        message: 'delete customer success',
        customer
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: 'delete customer failed'
      })
    })
  }
}