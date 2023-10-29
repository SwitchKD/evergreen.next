import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';
import jseu from 'js-encoding-utils'
import mongoose from 'mongoose';

// Connect to the MongoDB database
connectmongodb("Source: Auth");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const emailA = searchParams.get('email');
    const passwordA = searchParams.get('password');

    const decpassword = jseu.encoder.encodeBase64(passwordA);

    const user = await User.findOne({ email: emailA, password: decpassword });

    //Close connection
    mongoose.connection.close

    return new Response(JSON.stringify(user));
}
