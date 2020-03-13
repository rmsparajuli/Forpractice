// 4 types of loop in js

// 1> while loop
// 2> do while loop
// 3> for loop
// 4> for/in loop

let x = 15;
let y = 1;
while (y <= x) {
  console.log("while loop", y);
  y++;
}

// do while
let xx = 15;
let yy = 1;
do {
  console.log("do while loop", yy);
  yy++;
} while (yy <= xx);

// for loop and nested loop
// you know it

// For in loop

const obj = { a: 1, b: 3, c: 3, d: 4 };
for (let o in obj) {
  console.log(obj[o]);
}

// for of loop
console.log("For of loop");
const obj2 = [1, 2, 3, 4, 5, 6];
for (let value of obj2) {
  console.log(value);
}

var name;
var name2 = 2;
console.log(name, name2 / 0);

