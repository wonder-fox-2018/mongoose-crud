const Book = require('../models/book');

class Controller {

    static create(req,res){
        Book.create({ 
            isbn:  req.body.isbn,
            title:  req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
         }, function (err, newBook) {
            if (err) {
                res.status(400).json({
                    message : 'error add new book'
                })
            }else {
                res.status(200).json(newBook)
            }
          });
    }

    static read(req,res){
        Book.find({}, function (err, docs) {
            if(err){
                res.status(400).json({
                    message : 'error read all book data'
                })
            }else{
                res.json(docs)
            }
        });
    }

    static update(req,res){
        Book.updateOne({_id : req.params.id},{$set:{
            isbn:  req.body.isbn,
            title:  req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }}, function(err, update) {
            if(err){
                res.status(400).json({
                    message : 'update error'
                })
            }else{
                res.status(200).json(req.body)
            }
        });
    }
    
    static delete(req,res){
        Book.deleteOne({_id : req.params.id},function(err,r){
            if(err){
                res.status(400).json({
                    message : `failed to delete ${req.params.id}`
                })
            }else{
                res.status(200).json({
                    message : `delete ${req.params.id} success`
                })
            }
        })
    }

}

module.exports = Controller;