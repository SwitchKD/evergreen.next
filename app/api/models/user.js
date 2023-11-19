import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        email:String,
        password:String,
        firstname:String,
        lastname:String,
        address: String,
        role: String,
        phone: Number,
        verified: Boolean,
    }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema);