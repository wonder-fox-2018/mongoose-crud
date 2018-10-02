'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
},{
    timestamps: true
})

const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer