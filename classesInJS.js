class Person{
    constructor(name, job, gender){
        this.name=name;
        this.job=job;
        this.gender=gender;
    }

    getUserInfo(){
        console.log(`User name is ${this.name}, whose job is ${this.job}`);
    }

    static staticFun(){
        console.log("This is a static function in js classes");
    }
}

var satwinder = new Person("Satwinder Singh", "Life", "Male");
satwinder.getUserInfo();
Person.staticFun();
console.log(satwinder);

// same example with function constructor
function Person2(name, job, gender){
    this.name=name;
    this.job=job;
    this.gender=gender;
    
    Object.staticFun2 = function(){
        console.log("This is a static function")
    }
}
Person2.prototype.getUserInfo2 = function(){
    console.log(`User name is ${this.name}, whose job is ${this.job}`);
}

var talwinder = new Person2("Talwinder Singh", "Peace", "Male");
talwinder.getUserInfo2();
console.log(talwinder);
// Person2.staticFun2();


