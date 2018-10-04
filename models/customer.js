const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const customerSchema = new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
