// FizzBuzz — Print numbers from 1 to n, but for multiples of 3 print "Fizz,"
// for multiples of 5 print "Buzz," 
// and for multiples of both, print "FizzBuzz."

// Time complexity:  Single loop → O(n).

function getSeries(num){
    for(let i=1; i<=num; i++){
        if(i % 3 ===0 && i % 5 ===0) console.log("FizzBuzz");
        else if(i % 3 ===0) console.log("Buzz");
        else if(i % 5 ===0) console.log("Buzz");
        else console.log(i);
    }
}

getSeries(20);

