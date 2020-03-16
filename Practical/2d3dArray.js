// Sum of 3D Array

let three = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [[4, 5, 6]],
  [[7, 8, 9]]
];

let thsum = 0;
for (let i = 0; i < three.length; i++) {
  three[i].forEach(element => {
    //console.log(element);
    for (let j = 0; j < element.length; j++) {
      // console.log(element[j]);
      thsum = thsum + element[j];
    }
  });
}

console.log("sum of 3d array", thsum);

// Now 2d Array sum

let multi = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let multisum = 0;
for (let i = 0; i < multi.length; i++) {
  // console.log(multi[i]);
  multi[i].forEach(element => {
    //   console.log(element)
    multisum = multisum + element;
  });
}

console.log("sum of 2d array", multisum);

// Now sum of single Array

let arry = [1, 2, 3, 4, 5, 6];
let arrsum = 0;

// for each
arry.forEach(element => {
  // console.log(element);
  arrsum = arrsum + element;
});

console.log("sum of array", arrsum);
