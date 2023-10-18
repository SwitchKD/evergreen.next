import User from '../models/user';
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'

export async function POST(request){
    const {user_id} = await request.json()
    console.log(user_id);
    await connectmongodb()

    // Use the updateOne or updateMany method to update the document(s)
    const result = await User.findOne({_id:user_id});

    return new Response(JSON.stringify(result))

    return NextResponse.json({message: result},{status:"200"})
}
