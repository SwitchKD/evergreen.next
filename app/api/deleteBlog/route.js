import Blog from '../models/blog'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

export async function POST(request){
    const blog_id = await request.json()
    console.log(blog_id.blog_id);

    await connectmongodb('Source: Delete Blog')
    await Blog.deleteOne({_id:blog_id.blog_id});

    //Close connection
    mongoose.connection.close

    return NextResponse.json({message: "blog deleted"},{status:"200"})
}