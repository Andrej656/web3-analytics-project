// src/database.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = 'your-mongodb-connection-uri';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
}

export async function storeDataInDatabase(walletId: string, data: any) {
  const database = client.db('your-database-name');
  const collection = database.collection('walletData');

  try {
    const result = await collection.insertOne({ walletId, data });
    console.log('Data stored in the database', result);
  } catch (err) {
    console.error('Error storing data in the database', err);
  }
}
