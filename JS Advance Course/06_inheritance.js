/** Inheritence */

// parent class => child class
// using extends keyword
// using inheritance you can reuse properties and methods of the parent class in the child class

// parent calss => Person => property => fname, lname
// child calss => Age => property => age

// create parent class Person

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

// create child class
class Age extends Person {
  constructor(age) {
    // super method;
    super("Harry", "Potter"); // super method call constructor of the person class (Parent class)
    this.age = age;
  }

  //   create method to display fname, lname and age;

  Showup() {
    console.log(`${this.fname} ${this.lname}`);
    console.log(`And you age is ${this.age}`);
  }
}

// create instance of the child class

const d = new Age(24);
console.log(d.Showup());
console.log(`first name is ${d.fname}`);
