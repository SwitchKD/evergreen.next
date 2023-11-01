import Post from '../models/post'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

export async function POST(request){
    var response = await request.json()

    await connectmongodb('Source: Delete Post')
    await Post.deleteOne({ _id: response.postId })

    //Close connection
    mongoose.connection.close

    return NextResponse.json({message: "post deleted"},{status:"200"})
}