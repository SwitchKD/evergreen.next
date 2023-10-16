import server from '../models/server'
import connectmongodb from '@/app/libs/mongodb'

connectmongodb()

const server_data = await server.find({})

export async function GET(req){
  // return new Response(plant)
  return new Response(JSON.stringify(server_data))
}