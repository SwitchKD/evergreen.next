import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';

// Connect to the MongoDB database
connectmongodb("Source:current_user");

export async function GET(req) {

    const { url } = req
    const searchParams = new URL(url).searchParams;
    const mail = searchParams.get('email');

    // console.log(mail);

    const user = await User.findOne({email:mail});


    return new Response(JSON.stringify(user));
}
