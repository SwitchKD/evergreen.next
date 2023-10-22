const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema(
    {
        plant_id:Number,
        latin_name:String,
        family:String,
        common_name:String,
        url:String,
        Category:String,
        origin:String,
        climate:String,
        temp_maxC:Number,
        temp_minC:Number,
        ideal_light:String,
        tolerated_light:String,
        watering:String,
        use:String
    }
)

module.exports = mongoose.models.Plant || mongoose.model('Plant', plantSchema);