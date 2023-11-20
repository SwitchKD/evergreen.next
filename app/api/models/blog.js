import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
        blogCreator_id: String,
        blogCreator_name: String,
        blog:{
            blog_title: String,
            blog_content: String,
            blog_rating: Number,
        }
})

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogSchema);