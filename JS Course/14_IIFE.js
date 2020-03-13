// IIFE

// Immediately invoked function expression (IIFE)
// let have example  using function:

const f = (function() {
  let str = "Immediately invoked function Expression with ()";
  return str;
})(); // it's all depend on () after creating function
console.log(f);

const fsecond = function() {
  let str = "Immediately invoked function Expression without parentheses";
  return str;
}; // it's all depend on () after creating function
console.log(fsecond());

// Now using closure

const abc = (function() {
  let count = 1;
  return function() {
    return `Value of Count: ${count++}`;
  };
})();

// Now call closure function:
console.log(abc());
console.log(abc());
console.log(abc());
