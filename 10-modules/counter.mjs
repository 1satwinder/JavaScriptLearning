function createCounter(initialValue) {
  let count = initialValue;

  return {
    getCount() {
      return count;
    },
    increament() {
      count++;
    },
    decreament() {
      count--;
    },
  };
}

export default createCounter;
