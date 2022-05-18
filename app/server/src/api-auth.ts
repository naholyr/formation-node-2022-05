import { createHmac } from "crypto";
import { WithId } from "mongodb";
import { mongoCollection } from "./mongo-client";
import jwt from "jsonwebtoken";

type UserData = {
  name: string;
  password: string;
};

const hashPassword = (password: string) => {
  const secret = process.env.HASH_SECRET ?? "";
  const hash = createHmac("sha256", secret).update(password).digest("hex");
  return hash;
};

export const addUser = async (
  name: string,
  password: string
): Promise<WithId<UserData>> => {
  const collection = await mongoCollection<UserData>("users");
  const user = await collection.findOne({ name });
  if (user) throw new Error("User already exists");
  const data = {
    name,
    password: hashPassword(password),
  };
  const result = await collection.insertOne(data);
  if (!result.insertedId) throw new Error("Could not create user");
  return { ...data, _id: result.insertedId };
};

export const validateUser = async (name: string, password: string) => {
  const collection = await mongoCollection<UserData>("users");
  const user = await collection.findOne({ name });
  if (!user) return false;
  const hash = hashPassword(password);
  return user.password === hash;
};

export const createJWT = (name: string) => {
  const secret = process.env.JWT_SECRET ?? "";
  const token = jwt.sign({ name }, secret, { algorithm: "HS256" });
  return token;
};
