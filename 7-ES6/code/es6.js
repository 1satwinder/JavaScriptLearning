let obj = {num1: 12, num2: 14};

let {num1, num2} = obj;
console.log(num1, num2);

let arr1 = [1,2,4];
let [a , b1, c] = arr1;
console.log(a,b1,c);

let arr2 = [3,4,5];
let arr3 = [ ...arr2, 6,7,8 ]
console.log('arr3', arr3);

let obj2 = { ...obj, num1:10, num3: 34};  // num1 is updated to 10 from 12 previous object
console.log('obj2', obj2);

const fn = () => {
    console.log('arrow function', Math.sqrt(26).toFixed(3));
}
fn();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myFriends6(friends);
