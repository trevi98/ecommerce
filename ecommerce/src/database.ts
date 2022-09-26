import logger from '@logger';
import mongoose from 'mongoose';
mongoose.plugin(schema => {
  const schemaTransform = schema.get('toJSON')?.transform;
  schema.set('toJSON', {
    transform: (doc, ret, options) => {
      if (schemaTransform !== undefined && typeof schemaTransform === 'function') {
        schemaTransform(doc, ret, options);
      }
      delete ret._id;
      ret.id = doc._id;
    },
  });
});
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
