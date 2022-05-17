import { fibo } from "./fibo";

describe("Fibonacci", () => {
  it("should return 5 ", () => {
    expect(fibo(5)).toEqual(5);
  });
});
