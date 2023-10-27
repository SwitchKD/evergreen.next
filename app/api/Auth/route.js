import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';

// Connect to the MongoDB database
connectmongodb("Source: Auth");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const emailA = searchParams.get('email');
    const passwordA = searchParams.get('password');


    // console.log(uid);

    const user = await User.findOne({ email: emailA, password: passwordA });

    return new Response(JSON.stringify(user));
}
