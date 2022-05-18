import { mongoCollection } from "./mongo-client";
import type { WithId } from "mongodb";
import { z } from "zod";
import { bus } from "./bus";
// Base common Post data
type PostData = {
  title: string;
  body: string;
  author: { name: string };
  date: Date;
};

// Exposed by public API to clients
export type ExposedPost = Omit<PostData, "date"> & { id: string; date: string };

// Stored internally
export type MongoPost = PostData;

// Utility type to list some properties as optional
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Minimum required to create a new post
export type NewPostData = Optional<PostData, "date">;

// Convert a MongoPost with ObjectId from DB to an ExposedPost with string id
const mongoPostToExposedPost = (mongoPost: WithId<MongoPost>): ExposedPost => {
  /** Destructuring assignment * /
  const { a, b } = object
  → const a = object.a
  → const b = object.b
  const { c: toto } = object
  → const toto = object.c
  const { d, ...rest } = object
  → const d = object.d
  → const rest = _.omit(object, ['d']) // using lodash
  → const rest = { a: object.a, b: object.b, c: object.d } // without d: object.d
  /** */
  const { _id, date, ...post } = mongoPost;
  return { id: _id.toString(), date: date.toISOString(), ...post };
};

// Insert a new post into the DB and returned the publicly exposable post
export const addPost = async (
  data: NewPostData
): Promise<ExposedPost | null> => {
  const collection = await mongoCollection<MongoPost>("posts");
  const post = {
    ...data,
    date: data.date ?? new Date(),
  };
  const result = await collection.insertOne(post);

  if (!result.insertedId) return null;

  const ret = mongoPostToExposedPost({ ...post, _id: result.insertedId });
  bus.emit("new-post", ret);
  return ret;
};

// Get all posts from the DB inserted after given date (default 6 months ago)
export const getRecentPosts = async (
  minDate: Date = sixMonthsAgo()
): Promise<ExposedPost[]> => {
  const collection = await mongoCollection<MongoPost>("posts");
  const postsCursor = collection
    .find({ date: { $gte: minDate } })
    .sort({ date: -1 });
  const posts = await postsCursor.toArray();
  return posts.map(mongoPostToExposedPost);
};

// Date - 6 months
const sixMonthsAgo = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
};
