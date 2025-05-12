function isBalancedBrackets(str) {
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let char of str) {
    // if current is closing char
    if (mapping[char]) {
      const topElement = stack.length ? stack.pop() : "#";

      if (topElement !== mapping[char]) {
        return false;
      }
    } else {
      // if current is opening char
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log("res: []", isBalancedBrackets('[]'));
console.log("res: ([)]", isBalancedBrackets('([)]'));
console.log("res: ([]){}", isBalancedBrackets('([]){}'));

