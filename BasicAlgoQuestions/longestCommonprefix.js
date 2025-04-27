// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    let res="";
    
    let firstString = strs[0];
    for(let i=0; i<firstString.length; i++){
        for(let j=0; j<strs.length; j++){
            if( (strs[j].length==i) || (strs[j][i] !== firstString[i]) ){
                return res;
            }
        } 
        res = res+ firstString[i];
    }
    return res; 
};

console.log(longestCommonPrefix(["flower","flow","flight"]));