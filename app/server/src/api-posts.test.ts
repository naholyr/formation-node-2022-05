import { range } from "lodash";
import { addPost, getRecentPosts } from "./api-posts";
import { mongoClient } from "./mongo-client";

// TODO mock client?
// jest.mock("./mongo-client");

describe("API / Posts", () => {
  // Clean all data before each test
  beforeEach(async () => {
    await (await mongoClient).db().dropDatabase();
  });

  // Clean all data after the last test
  afterAll(async () => {
    await (await mongoClient).db().dropDatabase();
    await (await mongoClient).close(true);
  });

  it("should add post", async () => {
    const result = await addPost({
      title: "New article",
      body: "This is the body",
      author: { name: "Nicolas" },
    });
    expect(result?.id).toBeDefined();
    expect(result?.date).toBeDefined();
  });

  it("should add post with date", async () => {
    const date = new Date();
    const result = await addPost({
      title: "New article",
      body: "This is the body",
      author: { name: "Nicolas" },
      date,
    });
    expect(result?.id).toBeDefined();
    expect(result?.date).toEqual(date);
  });

  it("should list no post", async () => {
    const posts = await getRecentPosts();
    expect(posts).toHaveLength(0);
  });

  const monthsAgo = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() - n);
    return date;
  };

  it("should list recent posts", async () => {
    // insert 10 articles from 0 to 9 months ago
    await Promise.all(
      range(10).map((age) =>
        addPost({
          title: `New article ${age} months ago`,
          body: "This is the body",
          author: { name: "Test" },
          date: monthsAgo(age),
        })
      )
    );
    // check that getRecentPosts returns the one more recent than 6 months ago
    const posts = await getRecentPosts();
    expect(posts).toHaveLength(7); // 0-6 months
    // check that they're sorted by date
    expect(posts).toEqual([
      expect.objectContaining({ title: `New article 0 months ago` }),
      expect.objectContaining({ title: `New article 1 months ago` }),
      expect.objectContaining({ title: `New article 2 months ago` }),
      expect.objectContaining({ title: `New article 3 months ago` }),
      expect.objectContaining({ title: `New article 4 months ago` }),
      expect.objectContaining({ title: `New article 5 months ago` }),
      expect.objectContaining({ title: `New article 6 months ago` }),
    ]);
    // expect(posts).toMatchSnapshot() // if only I could have useFakeTimers
  });

  /** Idea: mock by passing collection to "getRecentPosts" * /
  it("should list posts", async () => {
    const find = jest.fn().mockReturnValue({
      toArray: jest.fn().mockResolvedValue([]),
    });
    const posts = await getRecentPosts(undefined, {
      find,
    });
    console.log(posts);
    expect(find).toHaveBeenCalled();
    expect(find).toHaveBeenCalledWith({ date: { $gt: new Date() } });
  });
  /** */
});
