import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';
import mongoose from 'mongoose';

// Connect to the MongoDB database
connectmongodb("Source: currentUser");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const Uid = searchParams.get('uid');

    const user = await User.findById(Uid);

    //Close connection
    mongoose.connection.close

    return new Response(JSON.stringify(user));
}
