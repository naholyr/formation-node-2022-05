import { Async } from "./Async";
import { getPosts } from "./server-api";
import { PostsList } from "./PostsList";

export const PostsPage = () => (
  <Async fn={() => getPosts()}>
    {(data) => data && <PostsList posts={data} />}
  </Async>
);
