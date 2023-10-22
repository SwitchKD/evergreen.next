import User from '../models/user'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'

export async function POST(request){
    // console.log(request);
    const {user_id, address, password, email, age, pincode, fname, lname, rating, role, img, order, sold} = await request.json()
    await connectmongodb()
    await User.create({user_id, email, password, address, age, pincode, fname, lname, rating, role, img, order, sold})
    return NextResponse.json({message: "user created"},{status:"200"})
}