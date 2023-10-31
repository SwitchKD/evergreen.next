import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
        user_id:String,
        post:{
            plant_name: String,
            plant_description: String,
            plant_climate: String,
            plant_price: Number,
            plant_temp_maxC: Number,
            plant_temp_minC: Number,
            plant_light: String,
            plant_water: String,
            plant_use: String,
            plant_image: String,
        }
})

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);