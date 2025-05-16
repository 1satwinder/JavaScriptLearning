// its a Creational Pattern

// 1) Create Objects : Factory functions in order to create new objects.
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


// 2) Create Functions: Using Factory Function to create a new resuable Function

function greetingFactory(message) {
  return function (name) {
    console.log(`${message} ${name}`);
  };
}

const hi = greetingFactory('Hi!');
const hello = greetingFactory('Hello!');

hi("John");
hello("John");

// Real-World use case
function createApiClient(baseURL) {
  return function (endpoint) {
    return fetch(`${baseURL}${endpoint}`).then(res => res.json());
  };
}

const githubClient = createApiClient("https://api.github.com/");
githubClient("users/octocat").then(data => console.log(data));
