function ramesh(name) {
  return console.log(name * name);
}

ramesh(3);

// how jump statements works ?
// eg of jump statements:
// 1. break, 2. label

let a = 1;
label: while (a == 1) {
  console.log(a);
  break label;// we have to put this to break otherwise it is infinite loop
}
