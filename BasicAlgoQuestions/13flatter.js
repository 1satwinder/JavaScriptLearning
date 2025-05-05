//  1) Using recursion
function flatten(value) {
  let result = [];

  value.forEach((num) => {
    if (Array.isArray(num)) {
      result.push(...flatten(num));
    } else {
      result.push(num);
    }
  });

  return result;
}

console.log("result is", flatten([1, [2, [3, 4]]]));
console.log("result is", flatten([1, [2, 3]]));


