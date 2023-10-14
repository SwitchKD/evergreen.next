import mongoose from 'mongoose'
import User from './user'

const url = process.env.DATABASE_URL
mongoose.connect(url)

const users = await User.find({})

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(users))
}