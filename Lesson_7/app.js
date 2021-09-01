//alias
import { Laptop as MyLaptop, Task, sum, LessonTheme } from "./Models/Laptop";
import Laptop from "./Models/Laptop2";
// var fruits2 = ["apple", "orange", "pineapple"];
// const person = {
//   name: "Max",
//   surname: "Ivanov",
//   age: 30,
//   wife: {
//     name: "Olga",
//     surname: "Ivanova",
//     age: "29",
//   },
//   children: ["Ivan", "Tanya", "Stepan"],
// };

// const firstItem = fruits2[0];
// const secondItem = fruits2[1];
// const [firstItem, secondItem] = [...fruits2];
// const [fruits2[0], fruits2[1]]

// const { name } = { ...person }; // {...person} -> {name, age, surname, wife, choldren}
// console.log(name);

// const priceList = {
//   "t-shirt": 500,
//   shoes: 1000,
//   pants: 1500,
// };

// const newPriceList = {
//   "t-shirt": 600,
//   pants: 1300,
//   bags: 2500,
// };

// const mergePriceList = { ...priceList, ...newPriceList };

// const p = {
//   "t-shirt": 600,
//   shoes: 1000,
//   pants: 1300,
//   bags: 2500,
// };
// console.log(mergePriceList);
// console.log(p);

//npm - Node Package Manager

//JSON - JavaScript Object Notation
// const personJson = JSON.stringify(person, null, 2);
// console.log(personJson);
// const personFromJson = JSON.parse(personJson);
// console.log(personFromJson);

const myLaptop = new MyLaptop("DELL", "Vostro", 800);
const anotherLaptop = new Laptop("Intel core i5", "8 Gb");
console.log(myLaptop);
console.log(anotherLaptop);
console.log(new Task("buy laptop", "HIGH", "1"));
console.log(sum(5, 10));

console.log(`LessonTheme is ${LessonTheme}. Thanks for watching))`);
