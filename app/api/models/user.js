import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        email:String,
        password:String,
        firstname:String,
        lastname:String,
        age:Number,
        address:String,
        zipcode:String,
        rating:Number,
        role:String,
        img_url:String,
        order:Number,
        sold:Number,
        phone:Number
    }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema);