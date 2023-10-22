import { getSharedRequestData } from '../shared data/sharedData';
import User from '../models/user';
import connectmongodb from '@/app/libs/mongodb';

const Message = 'from currentUser';
await connectmongodb(Message);

// Function to periodically fetch the latest data
async function fetchDataPeriodically() {
  while (true) {
    try {
      const { user_id } = getSharedRequestData();
      const current = await User.findById(user_id).exec();

      if (current) {
        // Respond with the latest data
        return new Response(JSON.stringify(current), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      // Handle errors as needed
    }

    // Sleep for a specified interval before checking again (e.g., every 5 seconds)
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

export async function GET(req) {
  return await fetchDataPeriodically();
}