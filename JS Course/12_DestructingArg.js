// declare object

const o = {
  name1: "Parajuli",
  name2: "Pahari",
  name3: "Parajuli_pahari"
};

// now create function:

function getData({ name1, name2, name3 }) {
  return `${name1}, ${name2}, ${name3}`;
}

// call function:
console.log(getData(o));
