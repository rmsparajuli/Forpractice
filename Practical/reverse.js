function reverse_num(n) {
  n = n + "";
  let num = n
    .split("")
    .reverse()
    .join("");
  return num;
}

console.log(reverse_num(12345));

/** Write a program to reverse a number without using predefined split(), 
reverse(), and join() method */

function reverse_fun(num) {
  let nn = num.toString();

  const numbers = [];
  let str = "";

  for (let i = nn.lenght - 1, k = 0; i >= 0; i--, k++) {
    numbers[k] = nn[i];
    str = str + numbers[k];
  }
  return str;
}

console.log(reverse_fun(12345));
