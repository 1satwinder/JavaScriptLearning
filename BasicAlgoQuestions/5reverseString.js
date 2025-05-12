let str = "sta";

console.log("rever is",str.split("").reverse().join(""));

let result = '';
for(let i=str.length-1; i>=0; i--){
   result = result + str[i];
}

console.log("result is", result);