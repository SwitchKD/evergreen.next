import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
        list_userid:String,
        list_username:String,
        list_date: new Date(),
        quantity: Number,
        post:{
            plant_name: String,
            plant_description: String,
            plant_image: String,
            plant_price: Number,
            plant_light: String,
            plant_water: String,
            plant_use: String,
        }
})

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);