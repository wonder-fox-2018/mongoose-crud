const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  memberid: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer