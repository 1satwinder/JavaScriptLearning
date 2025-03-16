// three ways to create same object
class Table {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.volume = 4783;
    this.getArea = function () {   // this is instance methods can be moved outside then becomes prototype method
      return this.height * this.width;
    };
  }
}

const table1 = new Table(2, 3);
console.log("table 1 is", table1);

console.log("area table1 is", table1.getArea());

const table2 = {
  width: 2,
  height: 3,
  getArea: function () {
    return this.width * this.height;
  },
};

console.log("table 2", table2.getArea());

function TableF(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

const table3 = new TableF(2, 3);
console.log("function constructor", table3.getArea());
