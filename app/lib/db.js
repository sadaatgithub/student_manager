import {MongoClient} from 'mongodb'

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

let cachedClient = null;
async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient;
      }
  
    try {
      // Replace this with your MongoDB Atlas connection URL
      const uri = `mongodb+srv://${username}:${password}@cluster0.ghtuplo.mongodb.net/student?retryWrites=true&w=majority`;
  
      const client = await MongoClient.connect(uri);
  
      cachedClient = client;
      return client;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }
  
  export default connectToDatabase;