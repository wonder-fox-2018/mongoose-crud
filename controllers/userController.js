import User from '../models/userModel'

export default {

  createUser (req, res) {
    let newUser = {
      fullName: req.body.fullName,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }

    let user = new User(newUser)

    user.save()
      .then(data => {
        res.status(201).json({
          status: 'success',
          msg: data
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err.message
        })
      })
  },
  findAllUser (req, res) {
    User.find()
      .then(data => {
        res.status(200).json({
          status: 'success',
          data: data
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  },
  removeUser (req, res) {
    User.deleteOne({
      _id: req.params.id
    })
      .then(data => {
        res.status(200).json({
          status: 'success' 
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  },
  updateUser (req, res) {
    User.update({ _id: req.params.id }, {
      fullName: req.body.fullName,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
     .then(data => {
       res.status(201).json({
         status: 'success',
         msg: 'updating data success'
       })
     })
     .catch(err =>{
       res.status(500).json({
         status: 'failed',
         msg: err
       })
     })
  },
  findUserById (req, res) {
    User.find({
      _id: req.params.id
    })
    
      .then(user => {
        res.status(200).json({
          data: user
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 'failed',
          msg: err
        })
      })
  }
}