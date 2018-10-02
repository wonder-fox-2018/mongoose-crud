const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

module.exports = Customer = mongoose.model('Customer', new Schema(
    {
        name : String,
        memberid : {
            type : String,
            unique : true
        },
        address : String,
        zipcode : String,
        phone : {
            type : String,
            unique : true
        }
    }
).plugin(uniqueValidator))
