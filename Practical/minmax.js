/**  Write a program to find maximum and minimum
 * number from an array element
 */

let min = (array, min = array[0]) => {
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
};

// maximum number

let max = (array, max = array[0]) => {
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
};

// create an array
const arry = [1, 2, 33, 4, 10, 12];
console.log("minimum value of an array element :" + min(arry));
console.log("maximum value of an array element :" + max(arry));
