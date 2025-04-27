// With normal javascript functions, `this` is bound when the function is called. 

// 1) Object Method call
// obj.method();  // preserves this, as we called using obj. this inside method() is equal to obj
// 2) Regular function call
// getName(); // this is undefined inside getName() is called without any object.
//  to explicity define this inside getName() use call, apply, bind


// With arrow functions, `this` is bound to the context in which the function is originally created.

// 1) With Function inside object
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

// using arrow function, it preserve this from outer context
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
  return this.fName + this.lName; // here this comes from lexical scoping i.e global scope which is undefined. Cannot use call, bind, apply here
};
let obj3 = { fName: "Talwinder", lName: "Toor" };

try {
  console.log("arrow function binding not possible", getNameArrow.call(obj3)); // we get undefined error
} catch (e) {
  console.log("some error calling arrow fn: ", e.message);
}


// this is also lost in case of setTimeout
//When a function is used as a callback, this is lost.

const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
     console.log( "Last" + this.firstName + this.lastName);
  }
}

setTimeout(person.display, 3000); // here this is lost

// why?
// When calling person.display(); // -> JS known `this` is `person`

// but with setTimeout we are only passing function reference. Like below
const display = person.display;
setTimeout(display, 3000);  // method in a variable, which doesn’t carry any information about person. So this is now lost.


//callback(); // this lost
//object.method();  // not lost

// Last example
function getCounter(initialValue) {
  let count = initialValue;  // this inside getCounter becomes {name: 'satwinder'}
  return  () =>  {
    count += 1;
    console.log("this is", this.name);  // this inside arrow function is inherited from above function
    return count;
  };
}

let add = getCounter.call({name: 'satwinder'},1);

console.log("count is", add());
console.log("count is", add());
