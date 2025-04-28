// throttle

function throttle(fn, wait) {
  let shouldThrottle = false;
  return function (...args) {
    if (shouldThrottle) return;
    shouldThrottle = true;
    fn.apply(this, args);
    setTimeout(() => {
      shouldThrottle = false;
    }, wait);
  };
}

function news(num) {
  console.log("hello sir", num);
}

const th = throttle(news, 1000);
th(1);
th(2);
th(3);
th(4);
