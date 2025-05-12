// Time complexity: O(n)
// Space Complexity: O(n) as we use map which can grow with time
function twoSum(nums, target) {
    let map = new Map();
    let result=[];
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(map.has(diff)){                            // cannot use if(obj[diff]). As obj obj is { '2': 0 }
            result.push(map.get(diff), i)            // value if first item is 0. false
            return result;
        }
        map.set(nums[i], i);
    }
    return;
};

console.log(twoSum([2,7,11,15],18));