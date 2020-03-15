// Documents Methods

// QuerySelector()
// QuerySelectorAll()

let para = document.querySelector(".para");
// query selector use to select CSS selector using .

// id selector
let para1 = document.getElementById("para1");

// query selector use to select CSS selector using #
let para2 = document.querySelector("#para2");

let para3 = document.querySelectorAll(".para");
// to change out on p (id , query , class)
para1.innerHTML = "Text has been changed";
// to make change on html's tag
console.log(para);
console.log(para1);
console.log(para2);
console.log(para3);

para3[2].innerHTML =
  "This is 2nd array from para class in paragraph from javascript";
para3[0].innerHTML = "First";
