import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
    throw new Error('Please define the DATABASE_URL environment variable inside .env.local');
}

// Global type declaration for mongoose cache
declare global {
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

// Check if global mongoose cache exists, otherwise, initialize it
if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    // Use the cached connection if available
    if (global.mongoose.conn) {
        return global.mongoose.conn;
    }

    // If no cached promise, create a new connection promise
    if (!global.mongoose.promise) {
        const opts = {
            bufferCommands: false,
        };

        global.mongoose.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            return mongoose;
        });
    }

    // Wait for the promise to resolve and cache the connection
    global.mongoose.conn = await global.mongoose.promise;
    return global.mongoose.conn;
}

export default dbConnect;
