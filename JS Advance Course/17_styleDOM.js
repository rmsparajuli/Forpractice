// Styling Elements

// Element.style.styleproperty = "value";
let sub = document.querySelector(".submit1");
// This is first options

// styling properties are case-sensitive

sub.style.backgroundColor = "Green";
sub.style.color = "white";
// sub.style.fontSize = "1em";

// now talk about 2nd options
let sub1 = document.querySelector("input[type = submit]");
sub1.classList.add("submit2");
