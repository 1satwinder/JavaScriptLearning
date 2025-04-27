function charCount(str) {
  const map = new Map();

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

console.log("hi", charCount("aasdtee").get('a'));
