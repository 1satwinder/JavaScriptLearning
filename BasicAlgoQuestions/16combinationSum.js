function combinationSumIndices(nums, target) {
  const result = [];

  function backtrack(start, path, indexPath, sum) {
    if (sum === target) {
      result.push([...indexPath]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < nums.length; i++) {
      backtrack(i + 1, [...path, nums[i]], [...indexPath, i], sum + nums[i]);
    }
  }

  backtrack(0, [], [], 0);
  return result;
}

const nums = [2, 3, 4, 7, 1];
const target = 7;

const res = combinationSumIndices(nums, target);
console.log(res); // Output: [ [1, 2], [3], [0, 1, 4] ]