import Blog from '../models/blog'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

export async function POST(request){
    const likeData = await request.json()

    await connectmongodb('Source: update Blog likes')
    await Blog.updateOne({ _id: likeData.BLOG_ID },{ $set: { 'blog.blog_rating': likeData.BLOG_UPDATELIKE } });

    //Close connection
    mongoose.connection.close

    return NextResponse.json({message: "blog like updated"},{status:"200"})
}