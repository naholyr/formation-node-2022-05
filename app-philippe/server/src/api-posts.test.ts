import { addPost, getRecentPosts } from "./api-posts";
import { mongoClient } from "./mongo-client";

describe("API / POSTS", () => {
  beforeEach(async () => {
    await (await mongoClient).db().dropDatabase();
  });

  afterAll(async () => {
    await (await mongoClient).db().dropDatabase();
    await (await mongoClient).close();
  });
  it("should add post", async () => {
    const x = await addPost({
      author: {
        name: "Philippe",
      },
      body: "ohsefpohgr",
      title: "Un titre",
    });
    expect(x?.id).toBeDefined();
    expect(x?.date).toBeDefined();
  });

  it("should not get recent post", async () => {
    const posts = await getRecentPosts();
    expect(posts).toHaveLength(0);
  });

  it("should get some post", async () => {
    const now = new Date(Date.now());
    await addPost({
      author: {
        name: "Philippe",
      },
      body: "ohsefpohgr",
      title: "Un titre",
      date: now,
    });
    await addPost({
      author: {
        name: "Philippe",
      },
      body: "ohsefpohgr",
      title: "Un titre",
      date: new Date(now.getFullYear(), now.getMonth() - 8, now.getDate()),
    });
    const posts = await getRecentPosts();
    expect(posts).toHaveLength(1);
  });
});
