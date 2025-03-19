function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  );
}

// short hacky solution
// return JSON.parse(JSON.stringify(value));

console.log(deepClone("foo"));
console.log(deepClone(234));
const obj = { user: { role: "admin", id: "123" } };
const clonedObj = deepClone(obj);
console.log(clonedObj);

// Topic: direct assignment, shallow copy, deep copy
