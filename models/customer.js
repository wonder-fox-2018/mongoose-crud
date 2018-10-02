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
    required: [true, 'is required'],
    maxlength: [6, 'maximal 6character']
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{4}-\d{4}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'is required'],
    maxlength: [16, 'maximal 16 character']
  }
}, {
  timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer