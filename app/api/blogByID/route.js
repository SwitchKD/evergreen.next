import Blog from '../models/blog';
import connectmongodb from '@/app/libs/mongodb';
import mongoose from 'mongoose';

// Connect to the MongoDB database
connectmongodb("Source: blogByID");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const uid = searchParams.get('bcid');

    const blog = await Blog.find({blogCreator_id:uid});

    //Close connection
    mongoose.connection.close

    return new Response(JSON.stringify(blog));
}
