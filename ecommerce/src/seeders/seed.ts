import { up as productsUp, down as productsDown } from './products';
import initDatabase from 'database';
import mongoose from 'mongoose';
require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
});
async function seed(operation: string | undefined) {
  await initDatabase();
  if (operation === 'down') {
    await productsDown();
  } else if (operation === 'up') {
    await productsUp();
  }
  await mongoose.disconnect();
}
seed(process.argv[2]);
