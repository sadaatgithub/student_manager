import {MongoClient} from 'mongodb'

// const username = process.env.MONGO_USERNAME
// const password = process.env.MONGO_PASSWORD
const mongoDbUri = process.env.MONGODB_URI

let cachedClient = null;
async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient;
      }
  
    try {
      // Replace this with your MongoDB Atlas connection URL
      const uri = mongoDbUri;
  
      const client = await MongoClient.connect(uri);
  
      cachedClient = client;
      return client;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }
  
  export default connectToDatabase;