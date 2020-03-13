const obj = { id: "1", name: "Ramesh" };
console.log(obj.name);
console.log(obj["name"]);

// declare object

const car = { cname: "BMW", modal: "i8", year: 2015 };

console.log("cname" in car);

class Model {
  constructor() {}
}
// creating an instance of the Model Class
const c1 = new Model();

// creating another instance
const c2 = new Model();

// conditional operator
let printany = 1;
// or we can add printany only to check false condition 
printany = printany ? printany : "Welcome";
console.log(printany);
