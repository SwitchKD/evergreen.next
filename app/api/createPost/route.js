import Post from '../models/post'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

export async function POST(request){
    const PostData = await request.json()
    console.log("CREATE POST");
    console.log(PostData);

    await connectmongodb('Source: Create Post')
    await Post.create(PostData)

    //Close connection
    mongoose.connection.close

    return NextResponse.json({message: "Post created"},{status:"200"})
}