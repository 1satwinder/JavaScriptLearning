// Implement Array.prototype.square

let arr = [1,2,3,5];

Array.prototype.square = function () {
  const length = this.length;
  const results = new Array(length);

  for (let i = 0; i < length; i++) {
    results[i] = this[i] * this[i];
  }

  return results;
};

console.log('array after square', arr.square());

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let k = 0; k < len; k++) {
    const kValue = this[k];
    if (
      // Ignore index if value is not defined for index (e.g. in sparse arrays).
      Object.hasOwn(this, k) &&
      callbackFn.call(thisArg, kValue, k, this)
    ) {
      results.push(kValue);
    }
  }

  return results;
};

//Function.prototype.call

Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.bind(thisArg, ...argArray)();
};


// Similarly we have Promise.prototype.then , Promise.prototype.catch
