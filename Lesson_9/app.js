// import CreditCard from "./Models/CreditCard";

// const date1 = new Date();
// const date2 = new Date(2021, 11, 31);

// console.log(date1, date2);

// Date.prototype.diffInMonth = function (date) {
//   return Math.abs(this.getMonth() - date.getMonth());
// };

// console.log(date2.getMonth() - date1.getMonth());
// console.log(date1.diffInMonth(date2));

// const a = {
//   a: 5,
//   b: 17,
//   c: {
//     a: 4,
//   },
// };

// Clone objects
// const b = { ...a };
//  const b = Object.assign({}, a);
//  const b = JSON.parse(JSON.stringify(a));

//  {
//   a: 5,
//   b: 3,
//   c: {
//     a: 4,
//   },
// };

// console.log("a == b", a == b);
// console.log("a === b", a === b);

// console.log("a before", a);
// console.log("b before", b);
// b.b = 155;
// console.log("a after", a);
// console.log("b after", b);

// Object.prototype.deepEqual = function (obj) {
//   const result = [];
//   for (let key in obj) {
//     if (typeof obj[key] === "object") continue;
//     result.push(this[key] ? this[key] === obj[key] : false);
//   }
//   return !result.some((value) => value === false);
// };

// console.log("a deepEqual b", a.deepEqual(b));
// console.log(typeof null);

// const myCreditCard = new CreditCard(15000, "151661891869", "Eugene Kiselev");
// myCreditCard.cardBalance = -5000; //set CardBalance
// myCreditCard.balance = -5000;
// console.log(myCreditCard.cardBalance); //get CardBalance
// console.log(myCreditCard.isOverdraft);
// // myCreditCard.overdraft = true;
// myCreditCard.isOverdraft = true;
// console.log(myCreditCard.overdraft);

class CreditCard {
  #balance;
  #isOverdraft;

  constructor(balance, account, owner, isOverdraft = false) {
    this.account = account;
    this.owner = owner;
    this.#balance = balance;
    this.#isOverdraft = isOverdraft;
  }

  get cardBalance() {
    return this.#balance;
  }

  set cardBalance(value) {
    if (value < 0 && !this.#isOverdraft) return;
    this.#balance = value;
  }

  //readonly
  get overdraft() {
    return this.#isOverdraft;
  }

  static getInfo() {
    return {
      _this: this,
      size: "15x9",
      paySystem: "Visa",
      material: "plastic",
    };
  }

  static NewCardFrom(card, owner) {
    const newCard = { ...card };
    const editedCard = {
      owner: owner,
      balance: 0,
    };
    return { ...newCard, ...editedCard };
  }
}

const myCreditCard = new CreditCard(15000, "0123456789", "Eugene Kiselev");
myCreditCard.balance = 5000;
console.log(myCreditCard);
console.log(myCreditCard.balance);
console.log(myCreditCard.cardBalance);

myCreditCard.overdraft = true;
console.log(myCreditCard.overdraft);
console.log(myCreditCard);

console.log(CreditCard.getInfo());

const friendCreditCard = CreditCard.NewCardFrom(myCreditCard, "Alex Ivanov");

console.log(friendCreditCard);

const person = null; 
// {
//   name: "123",
//   surname: "",
// };
console.log(person === null ? "not found" : person.name);
console.log(person?.name ?? "not found"); //null coalescing
