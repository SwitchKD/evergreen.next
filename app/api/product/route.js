import Plant from '../models/plant'
import connectmongodb from '@/app/libs/mongodb'

const Message = 'from userAuth'
connectmongodb(Message)

const plants = await Plant.find({})

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(plants))
}
