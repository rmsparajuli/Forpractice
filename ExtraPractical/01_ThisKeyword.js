const example = {
  name: "Ramesh",
  walk() {
    console.warn("this", this);
  },
};

example.walk(); // this will give object reference

const walk = example.walk; //this will give undefined

// solve with bind

// const walk = example.walk.bind(example);

walk();
