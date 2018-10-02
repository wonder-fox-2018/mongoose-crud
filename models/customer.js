var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var custSchema = new Schema({
    name: String,
    memberId: String,
    address: String,
    zipcode: String,
    phone: String
  });

  var Customer = mongoose.model('Customer', custSchema);

  module.exports = Customer