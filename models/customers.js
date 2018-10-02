const mongoose = require('mongoose'),
     Schema = mongoose.Schema;

const custScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    memberid: {
        type: String,
        required: true
    },
    address: String,
    zipcode: String,
    phone: String
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', custScheme)
module.exports = Customer