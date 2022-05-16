const fibo = (n) => (n === 0 ? 1 : n === 1 ? 1 : fibo(n - 1) + fibo(n - 2));

// Shorthand properties
module.exports = { fibo };
