import mongoose from 'mongoose'

const connectmongodb = async () =>
{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

export default connectmongodb