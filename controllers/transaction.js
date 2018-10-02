const Transaction = require('../models/transaction')

class transController{
    static findAll(req, res){
        Transaction.find({}).populate('booklist member', 'title name address').exec((err, result)  => {
            if(err) res.status(500).json({ error : err})
            res.status(200).json(result)
        })
    }

    static createTrans(req, res) {
        Transaction.create(req.body, (err, result) => {
            if(err) res.status(500).json({error : err})
            res.status(200).json(result)
        })
    }

    static updateTransaction(req, res){
        Transaction.updateOne({_id : req.params.id},
            req.body, err => {
            if(err) res.status(500).json({error : err})
            res.status(200).json({message : 'Update Success'})
        })
    }

    static deleteTransaction(req, res){
        Transaction.deleteOne({ _id : req.params.id}, (err)=> {
            if(err){
                constole.log(err)
                res.status(500).json({error : err})
            } 
            res.status(200).json({message : 'Delete Success'})
        })
    }
}

module.exports = transController