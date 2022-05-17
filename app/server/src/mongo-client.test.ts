import { mongoClient } from "./mongo-client";

describe("Mongo client", () => {
  it("should define MONGODB_URI", () => {
    expect(process.env.MONGODB_URI).toBeDefined();
  });
  it("should connect to test DB", () => {
    expect(mongoClient.db().namespace).toEqual("test");
  });
});
