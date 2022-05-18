import { getPosts, Post } from "./server-api";
import { PostsList } from "./PostsList";
import { useAsync } from "./use-async";
import { useCallback, useContext, useEffect, useState } from "react";
import { WebsocketContext } from "./websocket-context";

export const PostsPage = () => {
  // Fetch current posts
  const [fetchedPosts, error, loading] = useAsync(getPosts);

  // Store posts in state as we will modify them later on WS event
  const [posts, setPosts] = useState<Post[]>([]);

  // Every time current posts are fetched from REST API, reset posts list
  useEffect(() => {
    if (fetchedPosts && !loading) setPosts(fetchedPosts);
  }, [fetchedPosts, loading]);

  // Websocket: on new post, prepend to existing posts
  const socket = useContext(WebsocketContext);
  const handleNewPost = useCallback(
    (post: Post) => {
      setPosts([post, ...posts]);
    },
    [posts]
  );
  useEffect(() => {
    if (!socket) return () => {};
    socket.on("new-post", handleNewPost);
    return () => socket.removeListener("new-post", handleNewPost);
  }, [socket, handleNewPost]);

  // Render
  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <PostsList posts={posts} />;
};
