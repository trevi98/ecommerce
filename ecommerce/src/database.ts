import logger from '@logger';
import mongoose from 'mongoose';

export default async function initDatabase() {
  try {
    await mongoose.connect(process.env['MONGODB_URI'], {
      auth: {
        username: process.env['MONGODB_USER'],
        password: process.env['MONGODB_PASSWORD'],
      },
      dbName: process.env['MONGODB_DB'],
    });
  } catch (e) {
    logger.error('could not connect to MongoDB ' + e);
  }
}
