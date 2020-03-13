// Anonymous function
// which was dynamically declared on run time

const o = {
  name: "anonymous function",
  invoke: function() {
    return "This is Anonymous Function demo";
  }
};

const oo = {
  name: "anonymous function 2",
  invoke() {
    return "This is Anonymous Function demo2";
  }
};

console.log(o.invoke());
console.log(oo.invoke());
