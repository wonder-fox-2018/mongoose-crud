const Customer= require('../models/customerModel');

class CustomerController{
    static showAll(req, res){

        Customer.find({},function(err,result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        })
    }
    static createData(req, res){


        Customer.create({ 
            name: req.body.name, 
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode:req.body.zipcode,
            phone:req.body.phone
        }, function (err, result) {
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        });
     
    }
    static updateData(req, res){
        
        Customer.findByIdAndUpdate(req.params.id, { 
            name: req.body.name, 
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode:req.body.zipcode,
            phone:req.body.phone
         }, function (err, result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
         })
       
     
    }
    static deleteData(req, res){
        Customer.findByIdAndRemove(req.params.id, function (err, result){
            if(!err)
                res.status(200).json(result)
            else
                res.status(500).json({message:err.message})
        })
       
    }
  
}

module.exports=CustomerController;