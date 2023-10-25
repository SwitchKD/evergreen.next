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

    var aval
    if (!user) {
        aval = 'USER NOT FOUND'
    }
    else{
        aval = "USER FOUND"
    }

    return new Response(JSON.stringify(aval));
}
