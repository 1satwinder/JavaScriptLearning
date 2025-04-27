
// Time complexity: O(n)
function twoSum(nums, target) {
    let obj={};
    let result=[];
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(Object.keys(obj).includes(diff+"")){  // cannot use if(obj[diff]). As obj obj is { '2': 0 }
            result.push(obj[diff], i)            // value if first item is 0. false
            return result;
        }
        obj[nums[i]] = i
    }
    return;
};

console.log(twoSum([2,7,11,15],9));