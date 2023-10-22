import plants from '../models/plant'
import connectmongodb from '@/app/libs/mongodb'

const Message = 'from Showcase'
connectmongodb(Message)

const plant = await plants.find({})

const top = []


for (let index = 0; index < 3; index++) {
    const rand = Math.floor(Math.random() * 188);
    // console.log(rand);
    top.push(plant[rand])
}

    fetch('http://localhost:3000/api/showcase')
    .then(response=>response.json())
    // .then(data=>console.log(data))

export async function GET(req){
  return new Response(JSON.stringify(top))
}