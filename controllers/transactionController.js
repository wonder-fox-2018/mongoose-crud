const Transaction= require('../models/transactionModel');

class CustomerController{
    static showAll(req, res){

        Transaction.find({}).populate('booklist').populate('member')
         .then(result=>{
             res.status(200).json(result)
         })
         .catch(err=>{
             res.status(500).json({ message: err.message})
         })
        // Transaction.find({},function(err,result){
        //     if(!err)
        //         res.status(200).json(result)
        //     else
        //         res.status(500).json({message:err.message})
        // })
    }
    static createData(req, res){
        Transaction.create({ 
            member: req.body.member, 
            days: Number(req.body.days),
            out_date: new Date,
            due_date: new Date,
            fine:Number(req.body.fine),
            booklist:req.body.bookid
        }, function (err, result) {
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        });
     
    }
    static updateData(req, res){
        
        Transaction.findByIdAndUpdate(req.params.id, { 
            member: req.body.member, 
            days: Number(req.body.days),
            out_date: new Date,
            due_date: new Date,
            fine:Number(req.body.fine),
            booklist:req.body.bookid
         }, function (err, result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
         })
       
     
    }
    static deleteData(req, res){
        Transaction.findByIdAndRemove(req.params.id, function (err, result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        })
       
    }
  
}

module.exports=CustomerController;