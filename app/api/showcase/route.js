import plants from './plant'
import connectmongodb from '@/app/libs/mongodb'

connectmongodb()

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