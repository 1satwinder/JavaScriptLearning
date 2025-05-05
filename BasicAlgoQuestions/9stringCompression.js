// time complexity is O(n).
const stringCompression = (str) => {
const n = str.length;
let count=1, output='', uniqCount=0;

for(let i=0; i<n; i++){

	if(str[i] === str[i+1])
		count++;
	else{
		output += str[i]+count;
		count = 1;
		uniqCount++;
	}
  }
  if(uniqCount ===n ) return str;
  else return output;
}

console.log(stringCompression("aaabbcdddddd"))
console.log(stringCompression("abbcd"))