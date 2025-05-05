/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
function classNames(...args) {
  const classes = [];
  args.forEach((arg) => {
    if (!arg) {
      return;
    }

    const argType = typeof arg;

    // handle string and numbers
    if (argType === "string" || argType === "number") {
      classes.push(arg);
      return;
    }

    // handle arrays
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    // handle Objects
    if (argType === "object") {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
      return;
    }
  });

  return classes.join(" ");
}

console.log(classNames("foo", "bar")); // 'foo bar'
console.log(classNames("foo", { bar: true }, "buzz")); // 'foo bar buzz'
console.log(classNames({ "foo-bar": true })); // 'foo-bar'
console.log(classNames({ "foo-bar": false })); // ''
console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: false, qux: true }, "hi", ["a", "b"], {yo: true})); // 'foo qux'