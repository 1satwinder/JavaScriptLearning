function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitives
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}

// short hacky solution
// return JSON.parse(JSON.stringify(value));

console.log(deepClone("foo"));
console.log(deepClone(234));
const obj = { user: { role: "admin", id: "123" }, news: [1,2,3] };
const clonedObj = deepClone(obj);
console.log(clonedObj === obj);
console.log("cloned Obj", clonedObj);
// Topic: direct assignment, shallow copy, deep copy
