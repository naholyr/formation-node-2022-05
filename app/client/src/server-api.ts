import { get } from "./server-utils";

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
  return [
    {
      id: "1",
      title: "Post 1",
      body: "This is the body of post 1",
      author: { name: "John Doe" },
      date: "2022-01-01 00:00:00",
    },
  ];
};

export const addPost = async (data: NewPostData): Promise<Post> => {
  return {
    id: "1",
    title: data.title,
    body: data.body,
    author: data.author,
    date: new Date().toISOString(),
  };
};
