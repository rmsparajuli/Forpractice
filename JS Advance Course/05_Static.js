/**     Static Methods   */

// static methodname(){statements;}
//  static methods are used to create utility functions

// For example

class StaticClassMethod {
  static onCall() {
    return "This is static Method";
  }

  //   now create another static method
  // remember method is just a function here:

  static onCall2() {
    return `${this.onCall()} called using another static method`;
  }
}

// create instance for demo
const st = new StaticClassMethod();

// call static method using an instance
console.log(StaticClassMethod.onCall2());
// console.log(StaticClassMethod.onCall());
//  console.log(st.onCall()); //return error st.onCall() is not a function
