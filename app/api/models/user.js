import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        user_id:Number,
        email:String,
        password:String,
        fname:String,
        lname:String,
        age:Number,
        address:String,
        pincode:String,
        rating:Number,
        role:String,
        img:String
    }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema);