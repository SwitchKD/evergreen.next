import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        user_id:{
            type:Number,
            unique:true,
        },
        email:{
            type:String,
            required: [true, "please provide a email"],
            unique: true,
        },
        password:String,
        fname:String,
        lname:String,
        age:Number,
        address:String,
        pincode:String,
        rating:Number,
    }
)

module.exports = mongoose.models.User || mongoose.model('users', userSchema);

export default User