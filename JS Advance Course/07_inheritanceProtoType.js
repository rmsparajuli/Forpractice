/**         Prototype Inheritance        */

// Object.__proto__

// For example,

//  create object car
let car = {
  Wheel: "Four",
  Model: "Tesla",
  show() {
    console.log(`Car Model ${this.Model}, Have ${this.Wheel} Wheel`);
  }
};

// declare another object bike
let bike = {
  CC: 300
};

// specify __proto__ property to bike object
bike.__proto__ = car; // in doc __proto__ is deprecated
console.log(bike.Wheel);
bike.show();
