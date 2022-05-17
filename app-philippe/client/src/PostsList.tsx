import type { Post } from "./server-api";

type Props = {
  posts: Post[];
};

export const PostsList = ({ posts }: Props) => (
  <>
    <p> Number of posts {posts.length} </p>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <strong>{post.author.name}</strong> - <em>{post.date}</em>
          </p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </>
);
