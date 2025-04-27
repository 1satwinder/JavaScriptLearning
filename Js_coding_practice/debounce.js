function debounce(func, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args); // we can also keep it simple here like, func(...args). If we do not use this in func
    }, wait);
  };
}

const debouncedFunction = debounce(
  (number) => console.log("Hello world", number),
  2000
);

// the function is only called once within that 2 seconds interval. such that last call is executed
// If the function is called again while there's a pending invocation,
// we should cancel existing timers and schedule a new timer for the delayed invocation with the full wait duration.
debouncedFunction(1);
debouncedFunction(2);
debouncedFunction(3);

// Edge Cases
// The main pitfall in this question is invoking the callback function with the correct this, the value of this when the debounced function was called.
// Since the callback function will be invoked in a timeout, we need to ensure that the first argument to func.apply()/func.call() is the right value.
// There are two ways to achieve this:

//With normal javascript functions, `this` is bound when the function is called. With arrow functions, 
// `this` is bound to the context in which the function is originally created.

// the wrong way
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function sayHello() {
  console.log("My name is", this.name);
}

const amy = {
  name: "amy",
  speak: debounce(sayHello),
};

amy.speak(); // 'My name is undefined'

// Use another variable to keep a reference to this and access this via that variable from within the setTimeout callback.
// This is the traditional way of preserving this before arrow functions existed.
// Use an arrow function to declare the setTimeout callback where the this value within it has lexical scope.
// The value of this within arrow functions is bound to the context in which the function is created, not to the environment in which the function is called.

// debounced witn immediate=true; Run fn immediately on first call, then debounce subsequent ones:
function getDebounced(fn, wait = 2000, immediate = false) {
  let timer = null;
  return function (...args) {
    const context = this;
    const callNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(context, args);
    }, wait);

    if (callNow) fn.apply(context, args);
  };
}
