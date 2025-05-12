function addComma(num) {
  let [intPart, decPart] = Math.abs(num).toString().split(".");
  let result = "";

  let count = 0;
  for (let i = intPart.length - 1; i >= 0; i--) {
    result = intPart[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  if (num < 0) result = "-" + result;
  if (decPart) result += "." + decPart;

  return result;
}

console.log(addComma(100)); // '100'
console.log(addComma(1000)); // '1,000'
console.log(addComma(-12345678)); // '-12,345,678'
console.log(addComma(12345678.12345)); // '12,345,678.12345'