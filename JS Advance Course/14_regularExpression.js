// WTF is Regular Expression ?????

// is a powerful way to searching inside a string

// two ways to implement regular expression

// long syntax and short syntax

// long syntax,
// let reg0 = new RegExp("pattern", "flags");

// short syntax
// let reg1 = /pattern/;
// let reg2 = /pattern/afgls;
// lets have an example

let myName = "Welcome to universe";

// call regular expression constructor
let reg4 = new RegExp("universe"); //we wanted to search daily word from str string
let reg5 = /universe/; // this is short method of regular expression
// call search() method of string object

console.log("from reg4 long method", myName.search(reg4)); // result:  index number starting position
console.log("from reg5 short method", myName.search(reg5));

/** There 5 types of Regular Expression
 * 1. i == case sensitive search
 * 2. g == global search
 * 3. m == multiline search
 * 4. u == unicode
 * 5. p == sticky search
 */
