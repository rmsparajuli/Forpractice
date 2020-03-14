// Let's talk about array;

const arr1 = [1, 2, 3, 4, 5]; // simple array. array of numbers
const arr2 = ["one", 2, true]; // nonhomogenous Array literal
const arr3 = [
  // array containing array
  ["one", "two"],
  [1, 2, 3]
];

console.log("arr1", arr1);
console.log("arr2", arr2[0]);
console.log("arr3", arr3[0][1]);

// nonhomogenous array containing array
const arr4 = [
  { name: "Daily", No: 39 },
  [
    //   declare two objects
    { name: "Tutorials", subject: "array" },
    { name: "Tutorials", subject: "Literals" }
  ]
];

console.log("arr4", arr4[1][1].subject);

// array containing array with function
const arr5 = [
  { name: "Daily Tution", videos: 150 },
  [
    function() {
      return "containing Array";
    }
    // on 1 index of inner array
  ]
];

console.log("arr5", arr5[1][0]())