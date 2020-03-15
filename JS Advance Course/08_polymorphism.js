/** Polymorphism */
// using polymorphism you can override any property and method
// For Example

// Declare parent class

class Employee {
  constructor(name) {
    this.name = name;
  }
  // declare a method

  EmployeeName() {
    console.log(`employee name ${this.name}`);
  }
}

// Inherit parent class
class Member extends Employee {
  constructor(name, salary) {
    super(); // depricated of js from es6 we must include super function in constructor
    this.name = name;
    this.salary = salary;
  }

  // Override EmployeeName() Method of parent class

  //   just don't comment it to see original EmployeeName() function

  EmployeeName() {
    console.log(`Employee Name ${this.name} and Salary ${this.salary}`);
  }
}

// create instance of the child class

const mb = new Member("Ramesh Parajuli", 5000000);
mb.EmployeeName(); //execute child class method
