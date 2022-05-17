import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? "mongodb://localhost:27017/test";

// Connect at startup: "we recommend calling MongoClient.connect once and reusing the database variable"
// See http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connection-pooling
export const mongoClient = new MongoClient(uri).connect();

export const mongoCollection = async <T>(name: string) => {
  return (await mongoClient).db().collection<T>(name);
};
