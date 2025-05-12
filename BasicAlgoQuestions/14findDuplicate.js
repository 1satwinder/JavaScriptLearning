// Brute-force example:
// Time: O(n(square))
function findDuplicates(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === num) {
        return true;
      }
    }
  }
  return false;
}

console.log("find duplicate", findDuplicates([5, 7, 1, 3]));

// Using Sorting
// Time: O(nlogn)
function findDuplicates2(numbers) {
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      return true; // If a duplicate is found, return true
    }
  }

  // If no duplicates are found, return false
  return false;
}

console.log("find duplicate 2", findDuplicates2([5, 7, 1, 3, 7]));

// third way is to use Set
// Time: O(n)

function findDuplicates3(numbers) {
  let set = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    if (set.has(numbers[i])) {
      return true;
    } else {
      set.add(numbers[i]);
    }
  }
  // If no duplicates are found, return false
  return false;
}

console.log("find duplicate 3", findDuplicates2([5, 7, 1, 3, 17]));