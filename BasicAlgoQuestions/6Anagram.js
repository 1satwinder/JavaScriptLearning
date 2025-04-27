function charMap(str) {
  let result = {}; // we can also use map() here like const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = 1;
    } else {
      result[str[i]] = result[str[i]] + 1;
    }
  }
  console.log("charMap", result);
}

// O(n) time complexity
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let charCountS1 = charMap(s1);
  let charCountS2 = charMap(s2);

  for (let key in charCountS1) {
    if (!(charCountS1[key] === charCountS2[key])) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("sda", "asd"));
console.log(isAnagram("sdaaa", "asdaa"));
