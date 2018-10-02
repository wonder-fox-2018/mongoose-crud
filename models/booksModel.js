var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: {
    type: String,
    unique: true,
    required: true
  },
  title:  { type: String, default: 'Title Default' },
  author: String,
  category: String,
  stock: Number
});


var Book=mongoose.model('Book',bookSchema);


module.exports=Book;

// Book.schema.path('isbn').validate(function (value, respond) {                                                                                           
//     Book.findOne({ isbn: value }, function (err, data) {                                                                                                
//         if(data) 
//             respond(false);                                                                                                            
//     });                                                                                                                                                  
// }, 'book already exist');
// bookSchema.pre("save",function(next, done) {
//     var self = this;
//     mongoose.models["Book"].findOne({isbn : self.isbn},function(err, results) {
//         if(err) {
//             done(err);
//         } else if(results) { //there was a result found, so the email address exists
//             self.invalidate("email","email must be unique");
//             done(new Error("email must be unique"));
//         } else {
//             done();
//         }
//     });
//     next();
// });