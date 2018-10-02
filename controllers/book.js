const Book = require('../models/book')

class BookController{
    static findAll(req, res){
        Book.find({}, (err, result) => {
            if(err) status(500).json({error : err})
            res.status(200).json(result)
        })
    }

    static createBook(req, res){
        Book.create({
            isbn : req.body.isbn,
            title : req.body.title,
            author : req.body.author,
            category : req.body.category,
            stock : req.body.stock
        }, (err, result) => {
            if(err) {
                console.log(err)
                res.status(500).json({ error : err})
                
            } 
            else{
                res.status(200).json(result)
            }
        })
    }

    static updateBook(req, res){
        Book.updateOne({_id : req.params.id},
            {
                isbn : req.body.isbn,
                title : req.body.title,
                author : req.body.author,
                category : req.body.category,
                stock : req.body.stock
            }, err => {
            if(err) res.status(500).json({error : err})
            res.status(200).json({message : 'Update Success'})
        })
    }

    static deleteBook(req, res){
        Book.deleteOne({ _id : req.params.id}, (err)=> {
            if(err){
                constole.log(err)
                res.status(500).json({error : err})
            } 
            res.status(200).json({message : 'Delete Success'})
        })
    }
}

module.exports = BookController