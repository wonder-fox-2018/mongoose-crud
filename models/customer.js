const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customer = new Schema({
    _id: ObjectId,
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
});