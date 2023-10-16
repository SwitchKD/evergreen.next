import plants from '../models/plant'
import connectmongodb from '@/app/libs/mongodb'

connectmongodb()

const plant = await plants.find({})

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(plant))
}