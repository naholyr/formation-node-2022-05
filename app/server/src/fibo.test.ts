import { fibo } from "./fibo";

describe("Fibonacci", () => {
  it("fibo(5) = 5", () => {
    expect(fibo(5)).toEqual(5);
  });
  it("fibo(10) = 55", () => {
    expect(fibo(10)).toEqual(55);
  });
  it("fibo(-1) should throw", () => {
    expect(() => fibo(-1)).toThrow(/invalid number/i);
  });
});
