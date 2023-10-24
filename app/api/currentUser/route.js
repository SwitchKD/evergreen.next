import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';

// Connect to the MongoDB database
connectmongodb("Source:current_user");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const uid = searchParams.get('uid');

    // console.log(uid);

    const user = await User.findById(uid);

    return new Response(JSON.stringify(user));
}
