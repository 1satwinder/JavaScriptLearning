//promise example
let sumPromise = new Promise( (resolve, reject) => {
    let sum=10;
    // asyncronous task
    setTimeout( () => resolve(10), 3000);
    if(sum > 10){
        reject("sum is > 10");
    }
})
sumPromise
.then( (res) => console.log("res for promise 1 ",res))
.catch( err => console.log('err is', err));

// better approach: we can write a function that returns a promise. now you can pass some data as arguments
function sum(a,b){
    let sum = a+b;
    return new Promise( (resolve, reject) => {
    // asyncronous task
    setTimeout( () => resolve(sum), 2000);
    if(sum > 10){
        reject("there is an error");
    }
})
}
sum(5,5)
.then( (res) => console.log('res is', res))
.catch((error) => console.log('there is some wrror', error) )