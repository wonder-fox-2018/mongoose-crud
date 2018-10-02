var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var custSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    memberId:  {
      type: String,
      required: true
    },
    address:  {
      type: String,
      required: true
    },
    zipcode:  {
      type: String,
      required: true
    },
    phone:  {
      type: String,
      required: true,
      unique: true
    }
  });

  var Customer = mongoose.model('Customer', custSchema);

  module.exports = Customer