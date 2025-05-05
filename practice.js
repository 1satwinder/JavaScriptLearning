function flatter(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatter(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log("hello", flatter([1, 2, [3, 4, [5, 6, [7, 8]]]]));
