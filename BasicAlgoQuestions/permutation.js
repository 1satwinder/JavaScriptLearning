// permutation of a array
function calculatePermutations(arr) {
    const result = [];
  
    function backtrack(start) {
      if (start === arr.length) {
        result.push([...arr]); // Make a shallow copy
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
        backtrack(start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
      }
    }
  
    backtrack(0);
    return result;
  }
  
  console.log("permutation is", calculatePermutations([1,2,3]));