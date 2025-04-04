import mongoose from 'mongoose';
import Env from '@/env/Env';

const dbURI: string = Env.MONGODB_URI;

if (!dbURI) {
  console.error('MONGODB_URI environment variable not set.');
  process.exit(1);
}

const initializeDatabase = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('DB Connected Successfully.');
  } catch (error: any) {
    if (error instanceof Error) {
      console.error(`DB Error: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
    }
    process.exit(1); // Exit process with failure
  }
};

export default initializeDatabase;

export const disconnectFromDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};