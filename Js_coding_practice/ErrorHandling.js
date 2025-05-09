// 1) Handle inside Function call/scope
function hello() {
  try {
    // risky operation
  } catch (e) {
    console.error("Handled internally:", e);
    return "default value"; // fallback response
  } finally {
    console.log("cleanup if needed");
  }
}

// 2) Let the error bubble up (don't catch inside)
function hello() {
  let sum = 10;
  if (sum < 100) {
    throw new Error("Sum is not correct");
  }
  return sum;
}

// Call site
try {
  hello();
} catch (e) {
  console.error("Caught at call site:", e);
}

// 3) Both — handle in catch, then re-throw again for call site
function hello() {
  try {
    let sum = 10;
    if (sum < 100) {
      throw new Error("Sum is not correct");
    }
    return sum;
  } catch (e) {
    console.error("Logging error inside hello:", e);
    throw e; // re-throw to let caller handle
  }
}

// Important: How it works with async/await

// If the promise is rejected, it throws, so it must be inside a try/catch.
async function hello() {
  try {
    let result = await someAsyncOperation();  // if rejected this throws
    return result;
  } catch (e) {
    console.error("Error in hello:", e);
  }
}

// You can return a fallback value just like in sync functions.
async function hello() {
  try {
    let result = await someAsyncOperation();  // if rejected this throws
    return result;
  } catch (e) {
    console.error("Error in hello:", e);
    return "fallback value";
  }
}

//Last: Using finally with return 
// finally will always run, even if try or catch have return statements.
async function getData() {
  try {
    const result = await fetchData();
    return result;
  } catch (e) {
    console.error("Error:", e);
    return "fallback";
  } finally {
    console.log("Always runs");
  }
}
