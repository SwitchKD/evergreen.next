import mongoose from 'mongoose'
import user from './user'
import { NextResponse } from 'next/server'

export async function POST(request)
{
    const {user_id, address, email, username, age, pincode, firstname, lastname, rating} = await request.json()
    await mongoose.connect(process.env.DATABASE_URL)
    await user.create({user_id, address, email, username, age, pincode, firstname, lastname, rating})
    return NextResponse.json({message: "topic created"},{status:"200"})
}