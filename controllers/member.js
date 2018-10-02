const Member = require('../models/customer')

class memberController{
    static findAll(req, res){
        Member.find({}, (err, result) => {
            if(err) res.status(500).json({error : err})
            res.status(200).json(result)
        })
    }
    static createMember(req, res){
        Member.create(req.body, (err, result) => {
            if(err) {
                console.log(err)
                res.status(500).json({ error : err})
                
            } 
            else{
                res.status(200).json(result)
            }
        })
    }

    static updateMember(req, res){
        Member.updateOne({_id : req.params.id},
            {
                name : req.body.name,
                memberid : req.body.memberid,
                address : req.body.address,
                zipcode : req.body.zipcode,
                phone : req.body.phone
            }, err => {
            if(err) res.status(500).json({error : err})
            res.status(200).json({message : 'Update Success'})
        })
    }

    static deleteMember(req, res){
        Member.deleteOne({ _id : req.params.id}, (err)=> {
            if(err){
                constole.log(err)
                res.status(500).json({error : err})
            } 
            res.status(200).json({message : 'Delete Success'})
        })
    }
}
module.exports = memberController