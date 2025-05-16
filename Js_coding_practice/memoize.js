function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args); // creates a unique key from arguments
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowFunction(num) {
  for (let i = 0; i < 1e10; i++) {}
  return num * num;
}

const optimizedFunction = memoize(slowFunction);

console.log("slow", optimizedFunction(5)); // Slow
console.log("fast ", optimizedFunction(5)); // Fast

console.log("slow 6", optimizedFunction(6)); // slow
console.log("slow 7", optimizedFunction(7)); // slow

console.log("fast 6", optimizedFunction(6)); // slow
console.log("fast 7", optimizedFunction(7)); // slow