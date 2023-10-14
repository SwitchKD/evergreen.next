const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        user_id:Number,
        username:String,
        passworf:String,
        fname:String,
        lname:String,
        age:Number,
        address:String,
        pincode:String,
        rating:String,
    }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema);