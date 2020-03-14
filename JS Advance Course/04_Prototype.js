/**     Prototype    */

// every function has a special prototype prototype

//  For example

let f = function() {
  this.a = 1;
  this.b = 2;
};

let o = new f(); // created instance of the function using new keyword
o.d = 5; // create property using instance

//  now create prototype property

f.prototype.b = 3; // override property b if it is not exist
f.prototype.c = 4; // created prototype c property

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

console.log(f);
console.log(o);
