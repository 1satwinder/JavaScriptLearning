// example of creating a funtion inside constructor of a class in js
class Animal {
  constructor(name) {
    this.name = name;
    this.age = 34;
    this.group = "africa";

    function getName() {
      return "Earth";
    }
    let i = 12;
    // this is instace method as it inside constructor
    this.location = function () {
      let combine = this.name + this.age + getName() + i;

      return combine;
    };
  }
  // This is Prototype method
  getSomething() {
    return `\nThis is prototype method ${this.age}`;
  }
  // private method
  #getPrivateMessageInner() {
    return "kidha haal ne";
  }
}

let animal1 = new Animal("cat");
// console.log("animal1", animal1);
console.log("animal1 is", animal1.location(), animal1.getSomething());

// animal1.#getPrivateMessageInner();  // acceessing private method gives error