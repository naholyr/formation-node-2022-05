import { mongoClient } from "./mongo-client";
import type { WithId } from "mongodb";

// Base common Post data
type PostData = {
  title: string;
  body: string;
  author: { name: string };
  date: Date;
};

// Exposed by public API to clients
export type ExposedPost = PostData & { id: string };

// Stored internally
export type MongoPost = PostData;

// Utility type to list some properties as optional
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Minimum required to create a new post
export type NewPostData = Optional<PostData, "date">;

// Convert a MongoPost with ObjectId from DB to an ExposedPost with string id
const mongoPostToPost = (mongoPost: WithId<MongoPost>): ExposedPost => {
  return {
    id: mongoPost._id.toString(),
    ...mongoPost,
  };
};

// Insert a new post into the DB and returned the publicly exposable post
export const addPost = async (
  data: NewPostData
): Promise<ExposedPost | null> => {
  const collection = mongoClient.db().collection<MongoPost>("posts");
  const post = {
    ...data,
    date: data.date ?? new Date(),
  };
  const result = await collection.insertOne(post);
  return result.insertedId
    ? mongoPostToPost({ ...post, _id: result.insertedId })
    : null;
};

// Get all posts from the DB inserted after given date (default 6 months ago)
export const getRecentPosts = async (
  minDate: Date = sixMonthsAgo()
): Promise<ExposedPost[]> => {
  const collection = mongoClient.db().collection<MongoPost>("posts");
  const postsCursor = collection.find({ date: { $gte: minDate } });
  const posts = await postsCursor.toArray();
  return posts.map(mongoPostToPost);
};

// Date - 6 months
const sixMonthsAgo = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
};
