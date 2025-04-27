// 0, 1, 1, 2, 3, 5, 8
// F(n) = F(n-1) + F(n-2)

// using for loop : The time complexity is O(n).
function generateFibonacci(n) {
  const fib = [0, 1]; // starting two numbers

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

// Example usage:
const n = 10;
console.log(generateFibonacci(n));


// using recurssion: The time complexity is O(2ⁿ). Very slow
function fibo(n) {
  if (n === 0 || n === 1) return n;

  return fibo(n - 1) + fibo(n - 2);
}

for (let n = 0; n < 10; n++) {
  console.log(fibo(n));
}
