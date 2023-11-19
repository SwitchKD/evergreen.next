import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';
import mongoose from 'mongoose';

// Connect to the MongoDB database
connectmongodb("Source: Auth");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const email = searchParams.get('email');
    const password = searchParams.get('password');


    const user = await User.findOne({ email: email, password: password });

    //Close connection
    mongoose.connection.close

    return new Response(JSON.stringify(user));
}
