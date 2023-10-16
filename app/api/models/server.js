import mongoose from 'mongoose'


const serverSchema = new mongoose.Schema(
    {  
        userid_count: Number,
        motd: String
    }
);

module.exports = mongoose.models.Server || mongoose.model('Server', serverSchema);