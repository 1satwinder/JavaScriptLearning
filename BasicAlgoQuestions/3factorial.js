// 3! => 3*2*1 = 6

// Time complexity: O(n)
function getFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log("factrial of 3", getFactorial(3));
console.log("factrial of 5", getFactorial(5));

// Using recurssion
//  You can usually apply recursion when a problem can be broken down into smaller versions of itself.
// Example:
//Factorial of n = n × factorial(n-1)
//Fibonacci of n = fib(n-1) + fib(n-2)

// Time complexity: O(n)

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorialRecursive(n - 1);
}
console.log("factorial of 5 using recurssion: ", factorialRecursive(5)); // Output: 120
