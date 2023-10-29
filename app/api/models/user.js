import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        email:String,
        password:String,
        firstname:String,
        lastname:String,
        age: Number,
        address: String,
        zipcode: String,
        rating: Number,
        role: String,
        phone: Number,
        verified: Boolean,
    }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema);