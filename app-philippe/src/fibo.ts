export const fibo = (n: number): number =>
  n === 0 ? 0 : n === 1 ? 1 : fibo(n - 1) + fibo(n - 2);
