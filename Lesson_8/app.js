// ООП - Объектно-ориентированное программирование

import Animal from "./Models/Animal";
import Pet from "./Models/Pet";
import Cat from "./Models/Cat";
import Dog from "./Models/Dog";

// Все есть объект
const array = [1, 2, 3];
const user = {
  login: "test@mail.com",
  password: "123456",
};

// console.log(array instanceof Array);
// console.log(array instanceof Object);
// console.log(user instanceof Object);

// Инкапсуляция
// Наследование
// Полиморфизм
// Абстракция

// const animal = new Animal();
// console.log(animal);

const pet = new Pet("Murka", "Pashka");
console.log(pet);
pet.makeVoice();
console.log(pet.toString());

const cat = new Cat("Ruzhik", "Tanya");
console.log(cat);
cat.makeVoice();

const dog = new Dog("Tarzan", "Vova");
console.log(dog);

// function OldPet(nick, owner) {
//   this.nick = nick;
//   this.owner = owner;
// }
// const oldPet = new OldPet("bla bla", "Bla Bla");

// function OldCat() {}
// OldCat.prototype = Object.create(OldPet.prototype);
// OldCat.prototype.constructor = OldPet;

// const oldCat = new OldCat("nick", "owner");
// console.log(oldCat);

const fruits = ["apple", "banana", "orange"];

Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.takeFromStart = function () {
  // type your code here...
};

Array.prototype.takeFromEnd = function () {
  // type your code here...
};

Array.prototype.takeWhile = function (predicate) {
  const newArray = [];
  for (const item of this) {
    if (!predicate(item)) break;
    newArray.push(item);
  }
  return newArray;
};

console.log(fruits.first());
console.log(fruits[0]);
console.log(fruits.last());
console.log(fruits[fruits.length - 1]);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.takeFromStart(3)); //[1,2,3]
// console.log(numbers.takeFromEnd(3)); //[7,8,9]
