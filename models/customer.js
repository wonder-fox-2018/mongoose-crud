const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'is required']
  },
  memberid: {
    type: String,
    required: [true, 'is required']
  },
  address: {
    type: String,
    required: [true, 'is required']
  },
  zipcode: {
    type: Number,
    required: [true, 'is required']
  },
  phone: {
    type: String,
    required: [true, 'is required']
  }
}, {
  timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer