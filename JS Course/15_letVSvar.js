// let can only access on inside of function or own releted field or only inside of own class
// but var can access outside of class too

// lets take an example

for (var i = 0; i < 3; i++) {
  console.log(i);
}

// lets check with example
console.log(`Outside of var i is ${i}`);

for (let k = 0; k < 3; k++) {
  console.log(k);
}

// console.log(`Outside of let keyword demo is ${k}`);
// it shows error on program
