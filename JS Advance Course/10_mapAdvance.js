/** Maps */

// MapObject.size;
// set() and get();

// For example:

// call map constructor
const Mymaps = new Map();

// we will create three variables:

let keyString = "KeyString",
  keyObj = {};
keyFunc = function() {};

// use set() method to set key =>value

Mymaps.set(keyString, "KeyString Value");
Mymaps.set(keyObj, "KeyObj value");
Mymaps.set(keyFunc, "KeyFunc Value");

// know size of the map object

console.log("size of mymaps is ", Mymaps.size);

console.log("get from keyString", Mymaps.get(keyString));
console.log("get from keyObj", Mymaps.get(keyObj));
console.log("get from keyFunc", Mymaps.get(keyFunc));

Mymaps.set(NaN, "Not a Number");
console.log("type of NaN", typeof NaN);
console.log("get from NaN", Mymaps.get(NaN));
// if we put NaNa var . we have to declare it first because NaN is predefined

// iterate map key and values
for (let [key, value] of Mymaps) {
  console.log(`Map keys: ${key}, Values :${value}`);
}
// another way to create map object
const NewMap = new Map([
  [1, "one"],
  [2, "Two"],
  [2, "Three"]
]);

// iterate this map object using forEach() Method

NewMap.forEach(function(value, key) {
  console.log(`map keys: ${key}, values: ${value}`);
});
