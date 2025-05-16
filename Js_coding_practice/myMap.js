Array.prototype.myMap = function (callback) {
  // good practice to check these conditions
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  const arr = Object(this); // to handle array-like objects

  for (let i = 0; i < arr.length; i++) {
      result[i] = callback(arr[i])
  }
  return result;
};

const nums = [1, 2, 3];

const doubled = nums.myMap((num) => num * 2);

console.log(doubled); // [2, 4, 6]
