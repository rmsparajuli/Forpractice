// make click event's function

// declare a function

function displayDate() {
  document.querySelector(".para").innerHTML = new Date();
  document.querySelector(".para2").innerHTML = "This is Aucking Fwesome Text";
}

function displayText() {
  document.querySelector(".para2").innerHTML = "This is Aucking Fwesome Text";
}

// Now add event listener without help of html

// for this we are creating button on html
document.querySelector(".second").addEventListener("click", function() {
  document.querySelector(".para3").innerHTML =
    "Using addEventListener() Event Listener using js";

  document.querySelector(".para3").style.fontSize = "2em";
  document.querySelector(".para3").style.color = "tomato";
});

// Focus and blur image

let form = document.getElementById("form");
form.addEventListener(
  "focus",
  function(event) {
    console.log(event.target); // this is just demo for console
    event.target.style.background = "lightblue";
  },
  true
);

// create Blur event
form.addEventListener(
  "blur",
  function(event) {
    event.target.style.background = "";
  },
  true
);
