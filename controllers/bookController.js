const Book = require('../models/book.js')

module.exports = {

    findAll : (req,res)=>{
        Book.find({})
        .then((books) => {
            res.status(200).json({data : books})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    findById : (req,res)=>{
        Book.findById(req.params.id)
        .then((book) => {
            res.status(200).json({data : book})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    create : (req,res)=>{
        
        let {isbn,title,author,category,stock} = req.body
        
        Book.create(new Book({isbn,title,author,category,stock}))
        .then((book) => {
            res.status(200).json({data : book})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });

    },

    update : (req,res)=>{
        let {isbn,title,author,category,stock} = req.body

        Book.findByIdAndUpdate(req.params.id, {isbn,title,author,category,stock})
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    },

    delete : (req,res)=>{
        Book.deleteOne({_id : req.params.id})
        .then((result) => {
            res.status(200).json({data : result})
        }).catch((err) => {
            res.status(500).json({errors : err})
        });
    }


}