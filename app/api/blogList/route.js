import Blog from '../models/blog'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

const Message = 'from postList'
connectmongodb(Message)

const posts = await Blog.find({})

//Close connection
mongoose.connection.close

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(posts))
}