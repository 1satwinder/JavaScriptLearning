// its a Creational Pattern

// Singletons are classes which can be instantiated once, and can be accessed globally. 
// This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

// Use Case: Vuex/Pinia store, Axios instance.

class Counter {
  static instance;
  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
  }
  increament() {
    this.count += 1;
  }
  getCount(){
    return this.count;
  }
  decreament(){
    this.count -= 1; 
  }
}

let obj1 = new Counter();
let obj2 = new Counter();  // this get same instance returned from constructor. So both obj1, obj2 points to same obj. 
// we can also throw error inside if statement to prevent creating second refernece to same obj like throw new Error("You can only create one instance!");
obj1.increament(); 
obj1.increament(); 
console.log('obj1 is', obj1);
console.log('obj2 is', obj2);
console.log(obj1 === obj2); // true
obj2.decreament();
console.log('obj1 is', obj1);
console.log('obj2 is', obj2);

export default obj1; // can be used globally inside app

// example axios instance creation
class APIService {
    static instance;
    constructor() {
      if (APIService.instance) {
        return APIService.instance;
      }
      this.apiUrl = 'https://api.example.com';
      APIService.instance = this;
    }
  }
  const api1 = new APIService();
  const api2 = new APIService();
  console.log(api1 === api2); // true

