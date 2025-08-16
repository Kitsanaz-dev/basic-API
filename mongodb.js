import mongoose from 'mongoose';

const mongoDB = async () => {
    const url = process.env.CONNECTION_STRING;
    try {
        await mongoose.connect(url);
        console.log('Database connected successfully');
    } catch (err) {
        console.error("Database connection failed", err);
    }
}

export default mongoDB;