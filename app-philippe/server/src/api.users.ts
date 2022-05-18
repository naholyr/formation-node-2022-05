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

export const addUser = async (data: UserData): Promise<WithId<UserData>> => {
  const collection = await mongoCollection<UserData>("users");
  const res = await collection.findOne({ name: data.name });
  if (res) throw new Error("Already exist");
  data.password = hashPassword(data.password);

  const result = await collection.insertOne(data);
  if (!result.insertedId) throw Error("an error occured");
  return { ...data, _id: result.insertedId };
};

export const validateUser = async (
  name: string,
  password: string
): Promise<boolean> => {
  const hashedPassword = hashPassword(password);
  const collection = await mongoCollection<UserData>("users");
  const result = await collection.findOne({ name });
  return result?.password == hashedPassword;
};

export const createJWT = (name: string) => {
  const secret = process.env.JWT_SECRET ?? "";
  const token = jwt.sign({ name }, secret);
  return token;
};
