// 3 ways i found to write callback functions


// function clickEvent() {
//   var textentered=document.querySelector("#userinput")
//   return function () {
//     console.log("clicked!!");
//     console.log(textentered.value);
//   };
// }

// function clickEvent() {
//   var textentered = document.querySelector("#userinput");
//   console.log("Clicked!");
//   console.log(textentered.value);
// }

function clickEvent(textentered) {
  return function () {
    console.log("clicked!!");
    console.log(textentered.value);
    document.querySelector(".output").innerHTML = textentered.value;

  };
}

var clickedButton = document.querySelector("#translate-button");
var textentered = document.querySelector("[name='userinput']");

val=clickedButton.addEventListener("click", clickEvent(textentered));

