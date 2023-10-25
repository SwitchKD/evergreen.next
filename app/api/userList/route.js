import User from '../models/user'
import connectmongodb from '@/app/libs/mongodb'

const Message = 'from userAuth'
connectmongodb(Message)

const users = await User.find({})

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(users))
}
