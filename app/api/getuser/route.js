import User from './user'
import connectmongodb from '@/app/libs/mongodb'

connectmongodb()

const result = await User.find({})

export async function GET(req){
  return new Response(JSON.stringify(result))
}