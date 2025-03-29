//The prototype pattern is very powerful when working with objects that should have access to the same properties.
//Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, 
//since all instances have access to the prototype object.

class Dog {
    constructor(name) {
      this.name = name;  // this property goes to instance 
    }
  
    bark() {    // this property goes to prototype, which is shared by all instances of Dog type. And its mostly function
      return `Woof!`;
    }
  }
  
  const dog1 = new Dog("Daisy");
  const dog2 = new Dog("Max");
  const dog3 = new Dog("Spot");