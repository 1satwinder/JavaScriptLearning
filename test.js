class Student {
  constructor() {
    this.name = "Satwinder singh";
    this.age = 26;
  }

  getName() {
    return this.name;
  }
  // private method
  #getInner() {
    return "kidha haal ne";
  }
}

const s1 = new Student();

console.log("s1 is", s1.getName());
