// https://api.github.com/users/<<username>>

// You're not checking if the response is successful (res.ok) 
// before calling res.json(), which can lead to misleading results
function getUser(username) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
}

getUser("1satwinder").then((result) => console.log("Promise res", result));

// same example with with callback function
function getUser1(username, callback) {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((result) => callback(result))
    .catch((err) => callback({ isError: true, error: "there is some error" }));
}

getUser1("1satwinder", (res) => console.log("callback res", res));

// same example with async/await
async function getUser2(username) {
  try {
    let res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      throw new Error("there is some error"); // this also rejects the promise
    }
    const data = await res.json();
    return data; // this means resolve(data) as in native promise example
  } catch (err) {
    //     In async functions, any returned value resolves the promise.
    // If you return a value, the async function will resolve to that value.
    // If you throw an error, the async function will reject with the thrown error.
    throw { isError: true, error: "there is some error" }; // this mean reject()
  }
}

// the call site below will fail and gets throw messge from getUser2. So, it should also we wrapped in try/catch
getUser2("1satwinder").then((res) => console.log("async res", res));


// below code works becuase await can be used inside an async function or at the top level of a module.
// let usr = await getUser2('1satwinder');
// console.log('async res', usr);