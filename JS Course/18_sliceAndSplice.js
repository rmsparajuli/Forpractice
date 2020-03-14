// Slice()  Vs Splice()
// pure push, pop, shift , unshift demo
// and also concat
// concat() Method

// return array element at the end of the array
// return original array
// For example
const arr = [1, 2, 3];

console.log("main Array", arr);
console.log("Concat in main aarray", arr.concat(4, 5, 6));

// Slice() Method use to return sub array

const arr2 = [10, 11, 12, 13, 14];
console.log("After slice on 2", arr2.slice(2));
console.log("After slice 2,4", arr2.slice(2, 4));
console.log("print slice(-1) which prints last one", arr2.slice(-1));

// Now Splice

const arr3 = [1, 4, 3];
console.log("this is arr3", arr3);
arr3.splice(1, 0, 2, 8, 22);
console.log("After Splice", arr3);

arr3.splice(1, 3); // start from 1 index and remove 2 elements 8,22
console.log("after splice(1,3)", arr3);
