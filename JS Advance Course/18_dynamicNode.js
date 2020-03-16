/** New DOM Element */

// Element.createElement(tagName)

// lets have an example
// create two paragraph
let p1 = document.createElement("p");
let p2 = document.createElement("p");

// specify some demo text using textContent property
p1.textContent = "First Paragraph";
p2.textContent = "Second Paragraph";

// append paragraph to the DOM appendChild() method
const content = document.querySelector(".content");
content.appendChild(p1);
content.appendChild(p2);

// append paragraph to the body
document.body.appendChild(p2);
// Specify Attribute using setAttribute() Method

p1.setAttribute("class", "para1");
p2.setAttribute("class", "Ramesh Parajuli");
