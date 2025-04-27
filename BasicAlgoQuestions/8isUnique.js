
function isUnique(str){
	let countObj={};

	for(let i=0; i<str.length; i++){
		if (!countObj[str[i]])
		{
			countObj[str[i]] = 1
		}
		else{
		 countObj[str[i]] =  countObj[str[i]] + 1 ;	
		}
       
	}

	console.log(countObj)
	
    for(key in countObj){
    	if(countObj[key] >1){
    		return false;
    	}
    }
    return true;

}

console.log(isUnique("abcddd"))