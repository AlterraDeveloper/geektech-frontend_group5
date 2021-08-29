//ES6 - EcmaScript 6
// var a;
//Переменные let и const

// f1();
// f2();

//Hoisting - всплытие
// console.log(a);

// console.log(this); //window

// a = 5;

//scopes - область видимости
// for (let i = 0; i < 3; i++) {
//   let tmp = i + 2; // error
// }
// console.log(tmp);

// {
//   const outer = "outer";
//   {
//     console.log(outer);
//     const inner = "inner";
//     console.log(inner);
//   }
//   console.log(inner); //error
// }

// function f1() {}
// var f2 = function () {};

// let _let = 5;
// const _const = {
//   a: 5,
//   b: 10,
// };

// _let = 10;
// console.log(_let);
// _const.a = 25;
// _const.c = 45;
// console.log(_const);

//Arrow functions - стрелочные функции

//Функция с переменным числом аргументов
// function sum() {
//   var sum = 0;
//   for (const arg of arguments) {
//     sum += arg;
//   }
//   return sum;
// }

//rest operator
// var sumArrow = (...arguments) => {
//   var sum = 0;
//   for (const arg of arguments) {
//     sum += arg;
//   }
//   return sum;
// };

// console.log(sum(1, 2, 3));
// console.log(sumArrow(1, 2, 3));

// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1).toLowerCase();
// }

// var capitalize = (text) => text[0].toUpperCase() + text.slice(1).toLowerCase();

// var fruits = ["apple", "orange", "pineapple"];

// const newFruits = fruits.map((fruit) => fruit.toUpperCase());
// const capFruits = fruits.map(capitalize);
// console.log(newFruits);
// console.log(capFruits);

const button = document.getElementById("circle");
let counter = 0;
button.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.innerText = counter++;
});

//default arguments - аргументы по умолчанию

const DUPNUM = 2;
//[1,2,3] => [1,1,2,2,3,3]
function duplicate(array, dupNum = DUPNUM) {
  const newArr = [];
  array.forEach((item) => {
    for (let i = 0; i < dupNum; i++) newArr.push(item);
  });
  return newArr;
}

console.log(duplicate([1, 2, 3], 3));
console.log(duplicate([1, 2, 3]));

//Template strings - Шаблонные строки
const user = ["Alex T.", "Alex M."];
console.log(`Welcome, ${user[0]} and ${user[1]}`);
console.log("Welcome, " + user[0] + " and " + user[1]);

//Rest spread
//(clientID, items)
function purchaseItems() {
  var clientId = arguments[0];
  var items = Array.from(arguments).slice(1);
  for (var item of items) {
    console.log(`Client with ID = ${clientId} purchase ${item}`);
  }
  console.log(`Total of client with ID = ${clientId} : ${items.length}`);
}

//Rest operator
var purchaseItemsArrow = (clientId, ...items) => {
  for (var item of items) {
    console.log(`Client with ID = ${clientId} purchase ${item}`);
  }
  console.log(`Total of client with ID = ${clientId} : ${items.length}`);
};

// purchaseItemsArrow(1548745, "laptop", "watch", "shirt");
// purchaseItemsArrow(7948, "bag");

var fruits2 = ["apple", "orange", "pineapple"];
const person = {
  name: "Max",
  surname: "Ivanov",
  age: 30,
  wife: {
    name: "Olga",
    surname: "Ivanova",
    age: "29",
  },
  children: ["Ivan", "Tanya", "Stepan"],
};

// const firstFruit = fruits2[0];
// const thirdFruit = fruits2[2];

//Spread - деструктуризация
const [firstFruit, , thirdFruit] = [...fruits2];

console.log(firstFruit);
// console.log(secondFruit);
console.log(thirdFruit);

const { age: personAge, name: personName, children } = { ...person.wife };
console.log(personAge);
console.log(personName);
console.log(children);

function welcome({ name: userName, surname: userSurname }) {
  return `Welcome, dear ${userSurname} ${userName}`;
}

console.log(welcome(person));
console.log(welcome(person.wife));
