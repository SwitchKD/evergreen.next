import Blog from '../models/blog'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

export async function POST(request){
    const PostData = await request.json()
    console.log(PostData);

    await connectmongodb('Source: Create Post')
    await Blog.create(PostData)

    //Close connection
    mongoose.connection.close

    return NextResponse.json({message: "blog created"},{status:"200"})
}