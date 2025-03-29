// its a Creational Pattern

// With the factory pattern we can use factory functions in order to create new objects.
// A function is a factory function when it returns a new object without the use of the new keyword!

//why?
// Factory functions have always been attractive in JavaScript because they offer
// the ability to easily produce object instances without diving into the complexities of classes and the new keyword.

// combining power of object literal {} and function to create objects
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});

console.log(user1);
console.log(user2);
