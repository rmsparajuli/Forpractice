// normal function
let normalFun = function normalFun() {
  return console.log("normal function");
};

// arrow function
const arrowFun = () => {
  return console.log("This is arrow function");
};

// obj making function

const obj = { f: arrowFun };

// console.log(normalFun);
// console.log(normalFun());
// console.log(arrowFun());
console.log(obj.f());

// default argument function

add = (val = 10) => {
  return console.log(`sum = ${val + val}`);
};
add(20);
add();
