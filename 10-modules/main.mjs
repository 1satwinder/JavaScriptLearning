// using .mjs becuase I used node to run this code
import createCounter from "./counter.mjs";  // .counter.mjs script is executed first and then it continues here.

let counter = createCounter(2);  // createCounter() is available because of modular scope

console.log("count is", counter.getCount());
counter.increament();
counter.increament();
console.log("count is", counter.getCount());
