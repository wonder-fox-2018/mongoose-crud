import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullName : {
    type: String,
    required: true
  },
  memberId : {
    type: String,
    required: true,
    unique: true
  },
  address : {
    type: String,
    required: true
  },
  zipcode : {
    type: String,
    required: true
  },
  phone : String
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User