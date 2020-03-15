// it is just like map but we need this to make our key private

// let dive into example

// call seakmap constructor()

let weakmap = new WeakMap();

let obj = {},
  obj1 = {};

//   set weakmap key and value

weakmap.set(obj, "Private");
weakmap.set(obj1, "Private Data");

console.log(weakmap.get(obj1)); // here you know weakap key

// using for of loop we will try to access weakmap key and value

// uncomment this for each loop to see result
// for (let [key, value] of weakmap) {
//   console.log(key);
//   console.log(value);
// }
// return weakmap is not iterable
