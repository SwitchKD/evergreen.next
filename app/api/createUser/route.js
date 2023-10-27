import User from '../models/user'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'
import jseu from 'js-encoding-utils'

export async function POST(request){
    // console.log(request);
    var {phone, address, age, email, firstname, img_url, lastname, order, password, rating, role, sold, zipcode} = await request.json()

    password = jseu.encoder.encodeBase64(password);

    await connectmongodb('Source: Create User')
    await User.create({address, age, email, firstname, img_url, lastname, order, password, rating, role, sold, phone, zipcode})
    return NextResponse.json({message: "user created"},{status:"200"})
}