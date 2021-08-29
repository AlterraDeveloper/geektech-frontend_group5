//DOM - Document Object Model

// http://127.0.0.1:5500/Lesson_5/
// http://localhost:5500/Lesson_5/

// var h1 = document.getElementsByTagName("h1")[0];
// var h1 = document.getElementsByClassName("header")[0];
// var h1 = document.getElementById("headerOne");
var h1 = document.querySelectorAll(".header");
// console.log(h1);
setTimeout(function () {
  Array.from(h1).map(function (node) {
    node.innerText = "Welcome to JavaScript course";
  });
}, 1500);
