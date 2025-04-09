//The prototype pattern is very powerful when working with objects that should have access to the same properties.
//Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, 
//since all instances have access to the prototype object.

class Dog {
    constructor(name) {
      this.name = name;  // this property goes to instance 
    }
  
    bark() {    // this property goes to prototype, which is shared by all instances of Dog type. And its mostly function
      this.name = "hi";
      return `Woof!`;
    }
  }
  
  const dog1 = new Dog("Daisy");
  const dog2 = new Dog("Max");
  const dog3 = new Dog("Spot");


// classes are syntaxically sugar to old way to creating objects using function constrictor

// 1) Directly assigning prototype in object literal.
let proto = {
  getName: function () {
    return this.name;
  },
};

let obj1 = { name: "satwinder", __proto__: proto };
let obj2 = { name: "jaswinder", __proto__: proto };

console.log("obj1 is: ", obj1.getName());
console.log("obj2 is: ", obj2.getName());

console.log(
  "obj proto equality:",
  Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)
);

// Using Function Constructor
function Person(name){
  this.name = name;
}
Person.prototype = {
  getName: function () {
    return this.name;
  }
}

// static method
Person.getClass = function() { return "Person Function COnstructor"};

const person1 = new Person("satwinder");
const person2 = new Person("Talwinder");

console.log("person1 is: ", person1.getName());
console.log("person2 is: ", person2.getName());

console.log(
  "person object proto equality:",
  Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2)
);

console.log('static method of person:', Person.getClass());