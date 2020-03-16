// export functions using export keyword

function sum(a, b) {
  // call multi() function
  multi(a, b);
  console.log("sum is :", a + b);
}

multi = (a, b) => {
  console.log("multiplication of a and b is", a * b);
};

export { sum, multi };
