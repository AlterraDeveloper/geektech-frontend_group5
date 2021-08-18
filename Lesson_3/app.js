// Functions - функции

// myFunc();

//function declaration - определение функции
function myFunc() {
  console.log("I'm function declaration");
}

//function expression - функциональное выражение
var myFunc2 = function () {
  console.log("I'm function expression");
};

function checkHomeWorkProcess(studentName) {
  var favorites = ["A", "B", "C", "D"];
  return favorites.includes(studentName);
}

// myFunc2();

function checkHw(
  studentName,
  hwNo,
  callbackFn,
  fromGitHub = false,
  editor = "VS CODE"
) {
  if (fromGitHub) {
    console.log("Clone repository");
  } else {
    console.log("Download archive of", studentName);
    console.log("Extract archive");
  }
  console.log(`Open ${editor}`);
  console.log(`check homework #${hwNo} of ${studentName}`);
  var isHwCorrect = callbackFn(studentName);
  if (isHwCorrect) {
    console.log("Open google docs");
    console.log(`Mark 1 for homework #${hwNo} of ${studentName}`);
    console.log("Send sticker to", studentName, "in telegram");
  } else {
    console.log("Send feedback to", studentName);
  }
  delimiter();
}

function delimiter() {
  console.log("=".repeat(20));
}

// var hwResult = checkHw();
checkHw("Temirlan", 1, checkHomeWorkProcess, false, "PyCharm");
checkHw("Aizhan", 2, checkHomeWorkProcess, true);
checkHw("Almaz", 5, function () {
  //anonimous func - анонимная функция
  return true;
});
checkHw("D", 4, checkHomeWorkProcess);

//Функция с переменным числом аргументов
function sum() {
  var args = Array.from(arguments);
  var sum = 0;
  for (const arg of arguments) {
    sum += arg;
  }
  return sum;
}

// var fruits2 = new Array("apple", "orange", "pineapple");
// console.log(fruits);
// console.log(fruits2);
// console.log("[] instanceof Array", [] instanceof Array);

// console.log(sum(NaN));
// console.log(sum(5, 5));
// console.log(sum(5, 5, 5));
// console.log(sum(5, 5, 5, 5));
// console.log(sum(5, 5, 5, 5, 5));

function purchaseItems() {
  var clientId = arguments[0];
  var items = Array.from(arguments).slice(1);
  for (var item of items) {
    console.log(`Client with ID = ${clientId} purchase ${item}`);
  }
  console.log(`Total of client with ID = ${clientId} : ${items.length}`);
  delimiter();
}

// purchaseItems(1548745, "laptop", "watch", "shirt");
// purchaseItems(7948, "bag");
// purchaseItems(
//   67387428,
//   "phone",
//   "balls for golf",
//   "videocard",
//   "CPU",
//   "3 books"
// );

var fruits = ["apple", "orange", "pineapple"];
var names = ["john", "mICHAEL", "TeMiRlAn", "JOSEPH", "Jack", "Robert"];

// fruits.forEach(function (fruit) {
//   console.log(fruit.toUpperCase());
// });

//MAP FILTER REDUCE

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

var newFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log(fruits);
console.log(newFruits);

var newNames = names.map(capitalize);
newNames = names.map(function (name) {
  return name.length;
});
console.log(names);
console.log(newNames);

var filteredNames = names
  .map(capitalize)
  .map(function (name) {
    return name.replace("a", "");
  })
  .filter(function (name) {
    return name.startsWith("J");
  });
console.log(names);
console.log(filteredNames);

var fruitsText = fruits.reduce(function (fruit, current) {
  return fruit + " -> " + current;
});
console.log(fruits);
console.log(fruitsText);

var namesTotal = names.reduce(function (total, name) {
  total += name.length;
  return total;
}, 0);
console.log(namesTotal);
