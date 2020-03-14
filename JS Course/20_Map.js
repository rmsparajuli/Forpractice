// Map() function

// Map function will not modify array  except it create a new one and return it.
// use of map function

const arr1 = ["hari", "ram", "shyam", "kta", "kti", "psycho", "chikan", "hawa"];
const arr2 = [
  {
    name: "Ramesh",
    roll: 1
  },
  {
    name: "Juthey",
    roll: 2
  }
];

const map1 = arr1.map(x => x[1]);
const map2 = arr2.map(x => x.name);
console.log(arr1);
console.log(map2);
