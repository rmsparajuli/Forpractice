let btn = document.querySelector(".ajaxbtn");
btn.addEventListener("click", AjaxCall);


function AjaxCall() {
  // instance of xmlhttprequest object
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      for (let keys in data) {
        console.log(data[keys]);
      }
    }
  };
  xhttp.open("GET", "./23_response.json", true);
  xhttp.send();
}
