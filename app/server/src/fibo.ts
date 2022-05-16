export const fibo = (n: number): number => {
  if (n < 0 || isNaN(n)) throw new Error("Invalid number");
  return fiboSafe(n);
};

const fiboSafe = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fiboSafe(n - 1) + fiboSafe(n - 2);
};
