const check_palindrome = (str) => {
     
    let len = str.length;
    var mid = Math.floor(len/2);

    for( var i =0; i<mid; i++){
        if( str[i] !== str[len-1-i]){
            return false;
        }
    }
    return true;

    // const arr = str.split("");
    // const rev = [...arr].reverse();
    // console.log(arr);
    // console.log(rev);
    // return arr === rev;

}

const s = "madam";
console.log(check_palindrome(s))



