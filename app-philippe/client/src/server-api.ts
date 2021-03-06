import { get, post, setGlobalToken } from "./server-utils";

export const fibo = async (n: number) => {
  const { result } = await get(`/fibo/${n}`);
  return Number(result);
};

export type Post = {
  id: string;
  title: string;
  body: string;
  author: { name: string };
  date: string;
};

export type NewPostData = Omit<Post, "id" | "date">;

export const getPosts = async (): Promise<Post[]> => {
  return get("/posts");
};

export const addPost = async (data: NewPostData): Promise<Post> => {
  return post("/posts", data);
};

export const signUp = async (name: string, password: string) => {
  const { token } = await post("/auth/register", { name, password }, null);
  setGlobalToken(token);
  return { token };
};

export const signIn = async (name: string, password: string) => {
  const { token } = await post("/auth/login", { name, password }, null);
  setGlobalToken(token);
  return { token };
};

export const getUserInfo = async (): Promise<{ name: string } | null> => {
  return get("/auth/user");
};
