const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = Customer = mongoose.model('Customer', new Schema(
    {
        name : String,
        memberid : String,
        address : String,
        zipcode : String,
        phone : String
    }
))
