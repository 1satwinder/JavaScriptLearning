//  Methods Inside the Constructor (Instance Methods)
class Resume {
  constructor() {
    this.name = "satwinder";
    this.location = "toronto";
    this.work = "software developer";
    this.experience = "3 years";
    this.getInfo = function () {
      return `Name: ${this.name} location: ${this.location} work: ${this.work}`;
    };
  }
}

const resume = new Resume();
console.log("resume is", resume.getInfo());
console.log("resume is", resume.name);

// Methods outside of constructor  (Prototype Methods)
class Resume2 {
  constructor() {
    this.name = "satwinder";
    this.location = "toronto";
    this.work = "software developer";
    this.experience = "3 years";
  }
  getInfo() {
    return `Name: ${this.name} location: ${this.location} work: ${this.work}`;
  }
}

const resume2 = new Resume2();
console.log("resume is", resume2.getInfo());
console.log("resume is", resume2.name);
