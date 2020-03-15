/** set object is identical to map object */
// it allows you to store unique value of any types
// duplicate values are not allowed

// For example

const st = new Set();
st.add(1); //you can't put other variable add() is predefined that's why it doesn't shows error
st.add(2);
st.add(4);
// dublicate value will rejected

st.add(2);
// if you want to add object
st.add({ a: "One", b: "Two" });
console.log("Total st values", st);

// to know element is present in the collection or not use has() method
console.log("st has 5 :", st.has(5));
let checkno = st.has(4);
// to Delete method
if (checkno == true) {
  console.log("st has no 4 so i am going to delete it");
  st.delete(4);
} else {
  console.log("There is no 4 value");
}

console.log("Now total st values", st);

// iterate set() object using for of loop

for (let item of st) {
  console.log( item);
}
