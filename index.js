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

var clickedButton = document.querySelector("#translate-button");
var textentered = document.querySelector("[name='userinput']");
// var url = "https://api.funtranslations.com/translate/minion.json";
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// async function convert(text) {
//   var newurl = url + "?" + "text=" + text;
//   var fetchcontent = await fetch(newurl)
//     .then((res) => res.json())
//     .then((json) => json.contents.translated);
//   return fetchcontent;
// }

function convert(text) {
  // console.log(text);
  var newurl = url + "?" + "text=" + text;
  return fetch(newurl)
    .then((res) => res.json())
    .then((output) => {
      console.log(output);
      return output.contents.translated;
    });
}

function errorHandler(e) {
  document.querySelector(".output").innerText =
    "Sorry some error occured. Try again later";
}

function clickEvent(textentered) {
  return function () {
    console.log("clicked!!");
    console.log(textentered.value);
    convert(textentered.value)
      .then((res) => (document.querySelector(".output").innerText = res))
      .catch(errorHandler);
  };
}

val = clickedButton.addEventListener("click", clickEvent(textentered));
