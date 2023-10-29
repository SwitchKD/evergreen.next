import Plant from '../models/plant'
import connectmongodb from '@/app/libs/mongodb'
import mongoose from 'mongoose'

const Message = 'from userAuth'
connectmongodb(Message)

const plants = await Plant.find({})

//Close connection
mongoose.connection.close

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(plants))
}
