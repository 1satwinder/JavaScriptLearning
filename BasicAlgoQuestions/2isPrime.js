// 2, 3, 5, 7, 11, 13, 17, 19, 23

// Time complexity:  Single loop → O(n square).

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let result = [];
for (let i = 1; i < 30; i++) {
  if (isPrime(i)) result.push(i);
}
console.log("result is", result);
