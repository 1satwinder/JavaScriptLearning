function moveZeros(nums) {
  const result = [];

  let count = 0; 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
    else {
     count++;
    }
  }

  while(count){
    result.push(0);
    count--;
  }
  console.log("num is", result);
  return nums;
}

moveZeros([1, 3, 0, 5, 0, 2]);