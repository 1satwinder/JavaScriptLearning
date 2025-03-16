// callback example
function sum(a,b,callBack){
let sum=a+b;
// asyncronous task
setTimeout(callBack, 1000,sum);
}

console.log('before');
sum(10,20,(sum) => console.log('yo',sum));
console.log('hi');
