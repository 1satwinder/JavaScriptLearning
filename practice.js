function twoSum(nums, target) {
   let obj = {};

   for(let i=0; i<nums.length; i++){
    let diff = target - nums[i];
    console.log("diff is", diff);
    if(obj[diff+""]) {
        return [obj[diff], i]
    }
    obj[nums[i]] = i;
    console.log('obj is', obj);
   }
};

console.log(twoSum([2,7,11,15],9));