// deep Clone

function deepClone(obj) {
  const type = typeof obj;
  const clonedObj = {};
  if (type !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  for (const key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }

  return clonedObj;
}

const obj1 = {a:1,b:2};
const obj2 = deepClone(obj1);

console.log("obj1 obj2", obj1, obj2);

console.log(obj1 === obj2);
