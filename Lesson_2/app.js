// console.log(NaN == NaN);
// console.log(NaN === NaN);

// console.log(Infinity == Infinity);
// console.log(Infinity === Infinity);

// var inf = Infinity;
// var nan = NaN;

// console.log("isNaN() - >", isNaN(nan));
// console.log("isFinite() - >", isFinite(Infinity));

// console.log(5 == 5);
// console.log(5 === 5);

//Операторы
//1) Унарные - !
// var negativeNum = -10;
// console.log(-negativeNum);

// console.log("!true", !true);
// console.log("!false", !false);

//2) Бинарные + - * / % ** < > <= >= === == != !== && ||

// 3) Тернарный оператор (условие) ? действие1 : действие2
// var havePermission = false;

// var message = havePermission
//   ? "Check balance, withdraw, transfer"
//   : "You dont have permission";
// console.log(message);

// if (havePermission) {
//   console.log("Check balance, withdraw, transfer");
// } else {
//   console.log("You dont have permission");
// }

// var cond = false;
// console.log(cond ? "Yes" : "No");

// falsy - "" '' 0 false null undefined NaN document.all
//truthy
// if (NaN) {
//     console.log("Number is", number);
// }

// var number2 = 1
// number2 **= 2;
// var number = 0 + number2++;
//Короткое обновление переменных ++ -- += -= *= /= %= **=
// console.log(number);
// console.log(number2);
// ++ +=1
// console.log(number++);
// console.log(++number);

// for(var i=0; i<10; i++){
//     console.log(i +1);
// }

// for (var i = 10; i > 0; i--) {
//   if (i) {
//     console.log(i);
//   }
// }

// for (var i = 0, j = 0; i < 100; i += 15, j++) {
//   console.log(j ? j : "", i ? i : "");
// }
//             0  1  2  3  4
// var numbers = [1, 2, 3, 4, 5];
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] ** 2);
// }

// console.log(numbers[5]);
// var users = ["Max", "Ivan", "Ksenya", "Anna"];
// var isAuthorized = false;
// var i = 0;
// while (!isAuthorized) {
//   var user = users[i++];
//   console.log(user);
//   isAuthorized = user === "Anna";
// }
var blackList = ["max", "ivan", "KSENYA", "AnNa"];

// do {
//   var name = prompt("What is your name?");
// } while (blackList.includes(name));
// console.log(name);

// console.log(blackList.join(''));
// console.log(blackList.pop());
// console.log(blackList.push("Anna", "Liza"));
// console.log(blackList.shift());
// console.log(blackList.slice(0, 2));
console.log(blackList);

var newBlackList = [];
for (var user of blackList) {
  newBlackList.push(user[0].toUpperCase() + user.slice(1).toLowerCase());
}
console.log(newBlackList);

//break, continue

var users = ["a", "b", "c", "Ivan", "d"];
for (const user of users) {
  if (newBlackList.includes(user)) {
    console.log(user, "in blackList!");
    break;
  }
  console.log("Welcome,", user);
}

//Задача об удалении дубликатов из массива
var nums = [1, 2, 1, 1, 3, 1, 2, 3, 3]; //[1 2 3]
var distincts = [];
for (var num of nums) {
  if (!distincts.includes(num)) distincts.push(num);
}
console.log(distincts);

console.log(Array.from(new Set(nums)));

console.log("ха ".repeat(5));
console.log("Eugene".startsWith("E"));
console.log("         Eugene              ");
console.log("         Eugene              ".trim());

for (var i = 0; i < 20; i++) {
  var line = "";
  for (var j = 0; j < 20; j++) {
    line += (i === 0 || i === 19 || j === 0 || j === 19 ) ? "#" : " ";
  }
  console.log(line);
}
