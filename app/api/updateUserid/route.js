import Server from './server'
import { NextResponse } from 'next/server'
import connectmongodb from '@/app/libs/mongodb'

export async function POST(request){
    const {user_id} = await request.json()
    console.log(user_id);
    await connectmongodb()

    const fieldNameToUpdate = 'userid_count'; // Replace with the actual field name
    const newValue = user_id; // Replace with the new value
    // Construct an update query
    const updateQuery = { $set: { [fieldNameToUpdate]: newValue } };
    // Use the updateOne or updateMany method to update the document(s)
    await Server.updateOne({}, updateQuery);


    return NextResponse.json({message: "data created"},{status:"200"})
}