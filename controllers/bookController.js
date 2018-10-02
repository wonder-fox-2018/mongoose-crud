const Book = require('../models/book.js')

module.exports = {

    findAll : (req,res)=>{
        Book.find({}, (err, books)=>{
            if(!err) res.status(200).json({
                data : books
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    findById : (req,res)=>{
        Book.findById(req.params.id,(err, book)=>{
            if(!err) res.status(200).json({
                data : book
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    create : (req,res)=>{
        Book.create({
            isbn : req.body.isbn,
            title : req.body.title,
            author : req.body.author,
            category : req.body.category,
            stock : req.body.stock
        }, (err, result)=>{
            if(!err) res.status(200).json({
                data : result
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    update : (req,res)=>{
        Book.findByIdAndUpdate(req.params.id, {
            isbn : req.body.isbn,
            title : req.body.title,
            author : req.body.author,
            category : req.body.category,
            stock : req.body.stock
        },(err, result)=>{
            if(!err) res.status(200).json({
                OldData : result
            })
            else res.status(500).json({
                errors : err
            })
        })
    },

    delete : (req,res)=>{
        Book.deleteOne({
            _id : req.params.id
        },(err,result)=>{
            if(!err) res.status(200).json({
                data : result
            })
            else res.status(500).json({
                errors : err
            })
        })
    }


}