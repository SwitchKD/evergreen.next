import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';

export async function POST(request) {
    try {
        // Parse the request body as JSON to extract the user_id
        const requestBody = await request.json();
        const { user_id } = requestBody;

        // Initialize the MongoDB connection
        connectmongodb("from getuser");

        // Query the database for the user using User.findById
        const user = await User.findById(user_id);

        if (user) {
            // Return the user data as a JSON response with a 200 status code
            return new Response(JSON.stringify(user), { status: 200 });
        } else {
            // If the user is not found, return a 404 status code with an error message
            return new Response(JSON.stringify({user}), { status: 404 });
        }
    } catch (error) {
        // Handle errors
        console.error('Error:', error);

        // Return an error response with a 500 status code
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
