// Throttling is a technique used to control how many times we allow a function to be executed over time

export default function throttle(func, wait=0) {
    let shouldThrottle = false;
    return function (...args) {
      if(shouldThrottle){
        return;
      }
      shouldThrottle = true;
      setTimeout(() => {
        shouldThrottle = false;
      }, wait);
  
      func.apply(this, args)
    };
  }