// Behavioral Patterns
// These patterns define how objects communicate and interact. 

// Observer
// Defines a one-to-many dependency where state changes notify dependent objects.
// 📚 Use Case: Vue's reactivity system (watch, watchEffect).

class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(subscriber => subscriber !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

export default new Observable();


// Although we can use the observer pattern in many ways, it can be very useful when working with asynchronous, event-based data. 
// Maybe you want certain components to get notified whenever certain data has finished downloading, 
// or whenever users sent new messages to a message board and all other members should get notified.
