/**         Closure      */
// Closure is the combination of function bundle together with Reference. to each surrounding state.
// it is simply function inside another function

// declare outer function:
// jpt eg:
function Counter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = Counter();
console.log(counter);

// pure eg:
let closure;
{
  let block = "Character";
  closure = function() {
    console.log(block);
  };
}
closure();

// example with object:
let rp;
{
  // declare object here
  let obj = { name: "Ramehs Parajuli" }; //cannot access outside of the block

  //   using arrow function:
  f = () => {
    return obj;
  };
}
let ref = f();
console.log(ref.name);
