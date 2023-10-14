import mongoose from 'mongoose'
import plants from './plant'

const url = process.env.DATABASE_URL
mongoose.connect(url)

const plant = await plants.find({})

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(plant))
}