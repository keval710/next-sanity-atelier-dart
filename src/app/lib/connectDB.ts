import mongoose from 'mongoose';

async function dbConnect() {
    const DATABASE_URL = process.env.DATABASE_URL;
    if (!DATABASE_URL) {
        throw new Error('Please define the DATABASE_URL environment variable inside .env.local');
    } else {
        await mongoose.connect(DATABASE_URL!, { dbName: 'portfolio' })
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.error('MongoDB connection error:', err.message));
    }
}

export default dbConnect;
