import request from "supertest";
import { app } from "./app";

describe("App / Fibo", () => {
  it("GET /hello", async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/^text\/html/);
  });
});
