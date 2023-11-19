import Blog from '../models/blog'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

// Connect to the MongoDB database
connectmongodb("Source:blogID");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const uid = searchParams.get('id');


    const blog = await Blog.findById(uid);

    mongoose.connection.close

    return new Response(JSON.stringify(blog));
}