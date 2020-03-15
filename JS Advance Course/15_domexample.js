let para = document.getElementById("para"); // specify id as an argument

console.log(para);

// set or get element text using innerHTML property
para.innerHTML = "This is Dom Tutorial";

// using javascript channing
document.getElementById("para").innerHTML = "Hello Everyone";

// do the same thing using getElementByTagName() Method

let p = document.getElementsByTagName("p");
console.log(p);
