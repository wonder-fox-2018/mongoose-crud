const Book= require('../models/booksModel');

class BookController{
    static showAll(req, res){

        Book.find({},function(err,result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        })
    }
    static createData(req, res){


        Book.create({ 
            isbn: req.body.isbn, 
            title: req.body.title,
            author: req.body.author,
            category:req.body.category,
            stock:Number(req.body.stock)
        }, function (err, result) {
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        });
     
    }
    static updateData(req, res){
        let obj={};
        Object.assign(obj, 
            req.body.isbn ? { isbn: req.body.isbn } : null,
            req.body.title ? { title: req.body.title } : null,
            req.body.author ? { author: req.body.author } : null,
            req.body.category ? { category: req.body.category } : null,
            req.body.stock ? { stock: Number(req.body.stock) } : null
            );
        //console.log(obj)
        Book.findByIdAndUpdate(req.params.id, obj, function (err, result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
         })
       
     
    }
    static deleteData(req, res){
        Book.findByIdAndRemove(req.params.id, function (err, result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        })
       
    }
  
}



module.exports=BookController;