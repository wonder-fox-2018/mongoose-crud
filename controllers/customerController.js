const Customer = require('../models/customerModel')

module.exports = {

    showAll: function (req, res) {
        Customer.find()
        .then(data => {
            res.status(200).json({data: data})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    showOne: function (req, res) {
        Customer.findById(req.params.id)
        .then(datum => {
            if (datum) {
                res.status(200).json({data: datum})
            } else {
                res.status(404).json({message: `There is currently no customer with id: ${req.params.id}`})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    add: function (req, res) {
        Customer.init()
        .then(() => {
            Customer.create({
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            })
            .then(data => {
                res.status(201).json({message: `Customer '${req.body.name}' added`, data: data})
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    editAll: function (req, res) {
        if (!req.body.name || !req.body.memberid || !req.body.address || !req.body.zipcode || !req.body.phone) {
            res.status(500).json({message: 'PUT /customers/:id is used to change every field in the customer datum, to change only some of the fields, use PATCH /customers/:id'})
        } else {
            Customer.updateOne({
                _id: req.params.id
            }, {
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            })
            .then(() => {
                res.status(200).json({message: `Customer with id: ${req.params.id} updated`})
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
        }
    },

    editSome: function (req, res) {
        let toBeUpdated = {}
        if (req.body.name) {
            toBeUpdated.name = req.body.name
        }
        if (req.body.memberid) {
            toBeUpdated.memberid = req.body.memberid
        }
        if (req.body.address) {
            toBeUpdated.address = req.body.address
        }
        if (req.body.zipcode) {
            toBeUpdated.zipcode = req.body.zipcode
        }
        if (req.body.phone) {
            toBeUpdated.phone = req.body.phone
        }
        Customer.updateOne({
            _id: req.params.id
        }, toBeUpdated)
        .then(() => {
            res.status(200).json({message: `Customer with id: ${req.params.id} updated`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    },

    remove: function (req, res) {
        Customer.deleteOne({
            _id: req.params.id
        })
        .then(() => {
            res.status(200).json({message: `Customer with id: ${req.params.id} deleted`})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}