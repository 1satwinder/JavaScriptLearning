let car = {
  name: "maruti",
  model: "2003",
  getCar: function () {
    let context = this;
    function innerFunction() {
      return context.name + context.model; // directly using this here is undefined
    }
    return innerFunction();
  },
};

console.log("car is", car.getCar());

// also can fix this issue with binding
let car2 = {
  name: "honda",
  model: "2009",
  getCar: function () {
    function innerFunction() {
      return this.name + this.model; //
    }
    const bindReference = innerFunction.bind(this);
    return bindReference();
  },
};

console.log("car 2 is", car2.getCar());

// also can fix this issue with call/apply
let car3 = {
  name: "civic",
  model: "2034",
  getCar: function () {
    function innerFunction() {
      return this.name + this.model; //
    }
    return innerFunction.call(this);
  },
};

console.log("car 3 is", car3.getCar());

// using arrow function, it preserve this
let car4 = {
  name: "ford",
  model: "2454",
  getCar: function () {
    let arrowFn = () => {
      return this.name + this.model; //
    };
    return arrowFn();
  },
};

console.log("car 4 is", car4.getCar());

// with regular functions
function getName() {
  return this.fName + this.lName;
}
let obj2 = { fName: "Talwinder", lName: "Toor" };

console.log("with regular function using call", getName.call(obj2));

// with arrow Fn
// with regular functions
let getNameArrow = () => {
  return this.fName + this.lName; // here this comes from lexical scoping i.e global scope which is undefined
};
let obj3 = { fName: "Talwinder", lName: "Toor" };

try {
  console.log("arrow function binding not possible", getNameArrow.call(obj3)); // we get undefined error
} catch (e) {
  console.log("some error calling arrow fn: ", e.message);
}
