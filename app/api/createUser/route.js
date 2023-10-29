import User from '../models/user'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import jseu from 'js-encoding-utils'
import mongoose from 'mongoose'

export async function POST(request){
    var {phone, address, age, email, firstname, img_url, lastname, order, password, rating, role, sold, zipcode, verified} = await request.json()

    password = jseu.encoder.encodeBase64(password);

    await connectmongodb('Source: Create User')
    await User.create({address, age, email, firstname, img_url, lastname, order, password, rating, role, sold, phone, zipcode, verified})

    //Close connection
    mongoose.connection.close

    return NextResponse.json({message: "user created"},{status:"200"})
}