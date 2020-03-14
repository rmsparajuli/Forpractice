// syntax:
// arr.copyWithin(target, start, end)

// For Example

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [1, 2, 3, 4, 5];
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4, 5];

arr1.copyWithin(1, 2, 2); // always care about target, start and end
arr2.copyWithin(0, 2); // and also 2nd and 3rd parameter is optional
arr3.copyWithin(1, -1);
arr4.copyWithin(2, 1);
arr5.copyWithin(1, 1);
arr6.copyWithin(2, 2);
console.log("copyWith (1,2) ", arr1);
console.log("copyWith (0,2) ", arr2);
console.log("copyWith (1,-1) ", arr3);
console.log("copyWith (2,1) ", arr4);
console.log("copyWith (1,1) ", arr5);
console.log("copyWith (2,2) ", arr6);

console.log("Now fill()");
// syntax: arr.fill(value, start, end)
const fillDemo = [
  "hari",
  "ram",
  "shyam",
  "kta",
  "kti",
  "psycho",
  "chikan",
  "hawa"
];

fillDemo.fill("ramesh Parajuli", 1, 1);
console.log(fillDemo);
