// Implement a function makeCounter that accepts an optional integer value (defaults to 0) and 
// returns an object that contains the following methods:

// get(): returns the current value.
// increment(): increments the current value and returns it.
// decrement(): decrements the current value and returns it.
// reset(): resets the current value to the initial value.

export default function makeCounter(initialValue = 0) {
    let currentValue = initialValue;
    return  {
        get: function() {
          return currentValue;
        },
        increment: function(){
          return ++currentValue;
        },
        decrement: function(){
          return --currentValue;
        },
        reset: function(){
          currentValue = initialValue;
          return currentValue;
        }
      }
  }
  
  const counter = makeCounter();
  console.log(counter.get());
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.get());
  console.log(counter.reset());