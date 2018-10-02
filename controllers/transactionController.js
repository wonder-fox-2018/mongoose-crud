const Transaction = require('../models/transaction');

class Controller {
    
    static create(req,res){
        Transaction.create(req.body,function(err,r){
            if(err){
                console.log(req.body)
                res.status(400).json({
                    message : 'error create transaction'
                })
            }else{
                console.log(req.body)
                res.status(200).json(r)
            }
        })
    }

    static read(req,res){
        Transaction.find({}).populate('member booklist').exec((err, docs)=>{
            if(err){
                res.status(400).json({
                    message : 'cant get all transactions data'
                })
            }else{
                res.status(200).json(docs)
            }
        })
    }

    static update(req,res){
        Transaction.updateOne({_id : req.params.id},{$set : req.body},function(err,r){
            if(err){
                res.status(400).json({
                    message : `failed to update ${req.params.id}`
                })
            }else{
                res.status(200).json({
                    message : `update ${req.params.id} success`
                })
            }
        })
    }

    static delete(req,res){
        Transaction.deleteOne({_id : req.params.id},function(err,r){
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