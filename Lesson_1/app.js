// я однострочный комментарий
/*
Я многострочный комментарий
бла бла бла
бла бла бла
бла бла бла
бла бла бла
бла бла бла
*/

//Data types

// 1) Number

// var weight = 70;
// var height = 185;

// console.log(weight);
// console.log(height);

// console.log("+", weight + height);
// console.log("-", weight - height);
// console.log("*", weight * height);
// console.log("/", weight / height);
// console.log("%", height % weight);
// console.log("**", 2 ** 3);

// console.log(typeof weight);
// console.log(typeof Infinity);

//NaN - Not a Number

// 2) String

var name = "Max";
var surname = "Ivanov";
var fatherName = "Aleksandrovich";

// Concatenation - конкатенация

var fullName = surname + " " + name + " " + fatherName; //Camel case

//escaping - экранирование
var codeFolderPath = "C:\\Code\\JavaScript\\Lesson_1";

// 3) Boolean

// var isAuthorized = true;
// var havePermission = true;

// if (isAuthorized) {
//   console.log("Welcome,", fullName);

//   if (havePermission) {
//     console.log("Check balance, withdraw, transfer");
//   } else {
//     console.log("You dont have permission");
//   }
// } else {
//   console.log("Unknown user(");
// }

// console.log("AND", isAuthorized && havePermission);
// console.log("OR", isAuthorized || havePermission);
// console.log("NOT", !isAuthorized);
// console.log("NOT", !havePermission);

var age = 30;
var workExp = "30";

// console.log("===", age === workExp); //strict - строгое
// console.log("==", age == workExp); //nonstrict - нестрогое
// console.log("!==", age !== workExp); //strict - нестрогое
// console.log("!=", age != workExp); //nonstrict - нестрогое
// console.log(">", age > workExp);
// console.log("<", age < workExp);
// console.log(">=", age >= workExp);
// console.log("<=", age <= workExp);

age = prompt("How old are you?");
console.log("You are", age, "years old");

if (age > 0 && age <= 18) {
  console.log("Hello");
} else if (age > 18 && age < 55) {
  console.log("Nice to meet you");
} else if (age >= 55 && age < 120) {
  console.log("Welcome, dear...");
} else {
  console.log("Invalid age");
}

var shirtSize = "M";

// if (shirtSize === "S") {
//   console.log("Small");
// } else if (shirtSize === "M") {
//   console.log("Meduim");
// } else if (shirtSize === "L") {
//   console.log("Large");
// } else if (shirtSize === "XL") {
//   console.log("Extra large");
// } else {
//   console.log("Unknown size");
// }

switch (shirtSize) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Meduim");
    break;
  case "L":
    console.log("Large");
    break;
  case "XL":
    console.log("Extra large");
    break;
  default:
    console.log("Unknown size");
}

// 4) Undefined

var profession;

// 5) Function
// function getFullName(surname, name, fatherName) {
//   return surname + " " + name + " " + fatherName;
// }

// console.log(getFullName("Ivanov", "Ivan", "Ivanovich"));
// console.log(getFullName("Petrov", "Petr", "Petrovich"));

// 6) Object

// var person = {
//   name: "Max",
//   surname: "Gromov",
//   age: 18,
//   isEducated: true,
//   profession: undefined,
// };

var myName = prompt("What is your name?");
alert("Welcome, " + myName);
