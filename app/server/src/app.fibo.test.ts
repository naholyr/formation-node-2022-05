import request from "supertest";
import { app } from "./app";
import { fibo } from "./fibo";

jest.mock("./fibo");

// Fonction utilitaire pratique pour manipuler les méthodes mockés
// Sans ça "fibo.mockReturnValue(…)" n'est pas reconnu par TS et un simple "as any" nous prive de l'auto-complétion
const mock = <T extends jest.MockableFunction>(fn: T): jest.MockedFn<T> => {
  return fn as unknown as jest.MockedFn<T>;
};

describe("App / Fibo", () => {
  it("GET /fibo/xxx should call fibo(xxx)", async () => {
    await request(app).get("/fibo/50");
    expect(fibo).toHaveBeenCalledWith(50);
  });
  it("GET /fibo/xxx should return { result: fibo(xxx) }", async () => {
    mock(fibo).mockReturnValue(42);
    const response = await request(app).get("/fibo/50");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ result: 42 });
    expect(response.body).toEqual(expect.objectContaining({ result: 42 }));
    expect(response.body).toEqual({ input: 50, result: 42 });
  });
  it("GET /fibo/xxx should not change output", async () => {
    mock(fibo).mockReturnValue(42);
    const response = await request(app).get("/fibo/50");
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
});
