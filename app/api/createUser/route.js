import User from '../models/user'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'

export async function POST(request){
    // console.log(request);
    const {phone, address, age, email, firstname, img_url, lastname, order, password, rating, role, sold, zipcode} = await request.json()
    await connectmongodb()
    await User.create({address, age, email, firstname, img_url, lastname, order, password, rating, role, sold, phone, zipcode})
    return NextResponse.json({message: "user created"},{status:"200"})
}