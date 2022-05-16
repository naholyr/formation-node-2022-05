import request from "supertest";
import { app } from "./app";
import { fibo } from "./fibo";
jest.mock("./fibo");

describe("App / Fibo", () => {
  //   it('GET /fibo/5 should return {"result":5}', async () => {
  //     const response = await request(app).get("/fibo/5");
  //     expect(response.status).toBe(200);
  //     expect(response.body).toEqual({ result: 5 });
  //   });
  it('GET /fibo/5 should return {"result":5}', async () => {
    const response = await request(app).get("/fibo/40");
    expect(response.status).toBe(200);
    expect(fibo).toHaveBeenCalledWith(40);
  });
});
