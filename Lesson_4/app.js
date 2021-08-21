// Closures - замыкания
//High order functions - Функции высшего порядка

var inc = incCreator();

// inc(); //1
// inc(); //2
// inc(); //3
// inc(); //4

function incCreator() {
  var num = 1;
  return function () {
    console.log(num);
    num++;
  };
}

function funcBuilder() {
  return function () {
    console.log("I'm closure");
  };
}

var newFunc = funcBuilder();
// newFunc();

function createUnit(unitType) {
  return function (weapon) {
    console.log(`${unitType} created....`);
    console.log(`${unitType} weaponed with ${weapon}`);
  };
}

var units = ["Ork", "Elf", "Gnom"];
var weapons = ["Axe", "Sword", "Javelin", "Bow"];

function armyBuilders(units, weapons) {
  var builders = [];
  for (const unit of units) {
    var unitBuilder = createUnit(unit);
    for (const weapon of weapons) {
      builders.push(unitBuilder.bind(null, weapon));
    }
  }
  return builders;
}

var _armyBuilders = armyBuilders(units, weapons);
// _armyBuilders[0]();
// _armyBuilders[1]();
// _armyBuilders[4]();

// var orkBuilder = createUnit("Ork");
// var elfBuilder = createUnit("Elf");
// orkBuilder("Axe");
// elfBuilder("Bow");

// function getDiscount(value) {
//   return function (price) {
//     return price * (1 - value / 100);
//   };
// }

// // function vipDiscount(price) {
// //     return price * (1 - 20 / 100);
// // }

// var vipDiscount = getDiscount(20);
// var borodaPromokod = getDiscount(35);
// var pensioneerPromokod = getDiscount(7);

// console.log(vipDiscount(100));
// console.log(borodaPromokod(100));
// console.log(pensioneerPromokod(100));

// Objects - Объекты

var laptop = {
  RAM: 16,
  price: 1000,
  vendor: "Dell",
  model: "Vostro",
  isTypeC: true,
  isHDMI: true,
  "isUSB3.0": false,
  CPU: {
    freq: 3.1,
    vendor: "AMD",
    model: "Ryzen 9000",
    L1: "4kb",
    L2: "2kb",
  },
};

var person = {
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
//CRUD - Create Read Update Delete
person.profession = "Programmer"; //Create
person.age++; //Update
person.age = 18; //Update
person.wife.age++;
person.children.push("Annya"); //Update
delete person.wife; //Delete
delete laptop.CPU.L1;
delete laptop.CPU["L2"];

person.mom = {};
person.dad = {};

// console.log(laptop["isUSB3.0"]); //Read
// console.log(person.children); // Read

//функция конструктор
function SoccerPlayer(name, club, salary) {
  this.name = name;
  this.club = club;
  this.salary = salary;
}

var players = [
  new SoccerPlayer("Messi", "PSG", 1000000),
  new SoccerPlayer("Ronaldo", "Juventus", 950000),
  new SoccerPlayer("MBappe", "PSG", 800000),
  new SoccerPlayer("Neymar", "PSG", 970000),
  new SoccerPlayer("Sallah", "LiverPool", 840000),
  new SoccerPlayer("Dybala", "Juventus", 450000),
];

var clubs = players.reduce(function (uniqueClubs, player) {
  if (!uniqueClubs.includes(player.club)) {
    uniqueClubs.push(player.club);
  }
  return uniqueClubs;
}, []);

console.log(clubs);

//Chaining - объединение в цепочку вызовов
var psgPlayers = players
  .filter(function (player) {
    return player.club === "PSG";
  })
  .map(function (player) {
    return player.name;
  });

console.log(psgPlayers);

var juventusPlayersTotalSalary = players
  .filter(function (player) {
    return player.club === "Juventus";
  })
  .reduce(function (total, player) {
    return (total += player.salary);
  }, 0);
//   0 + 5 +7 = 12
// 5 + 7 = 12

console.log(juventusPlayersTotalSalary);

var mostPaidPsgPlayer = players
  .filter(function (player) {
    return player.club === "PSG";
  })
  .reduce(function (mostPaid, player) {
    return mostPaid.salary > player.salary ? mostPaid : player;
  });

console.log(mostPaidPsgPlayer.name);

for (const key in players[0]) {
  console.log(key);
}

for (const key in players) {
  console.log(key);
}

var obj = {
    a : 1,
    b : 2
}


var obj2 = obj;

obj2.a = 5;

