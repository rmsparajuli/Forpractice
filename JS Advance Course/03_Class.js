/** Class */

// syntax

class Model {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
    // body here
  }

  show() {
    return console.log(`name is ${this.name} and roll is ${this.roll}`);
  }

  //   method here
}

// now create instance of the class
const demoexample = new Model("ramesh", 25);
demoexample.show();

const obj2 = new Model();
// const obj1 = new Model();
// const obj2 = new Model();
