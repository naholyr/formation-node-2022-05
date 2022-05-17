import { MongoClient } from "mongodb";

const connect = () => {
  const uri = process.env.MONGODB_URI ?? "mongodb://localhost:27017/test";
  return new MongoClient(uri);
};

export const mongoClient = connect();
