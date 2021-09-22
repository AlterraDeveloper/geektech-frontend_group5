//Asynchronous programming

// console.log("1");

// window.setTimeout(() => {
//   console.log("3");
// }, 2500);

// console.log("2");

//setTimeout(0)
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// 1) стирка
// 2) ужин
// 3) уборка

// console.log("Start washing...");

// const washingTimeOut = setTimeout(() => {
//   console.log("Washing finished successfully!!!");
// }, 6000);

// console.log("Start cooking...");
// console.log("Start boiling water...");

// setTimeout(() => {
//   console.log("Boiling water finished");
//   console.log("Start cutting vegetables and meat");
//   console.log("Put food in boul");

//   setTimeout(() => {
//     console.log("Dinner is ready!!!");
//   }, 2000);
// }, 2000);

// console.log("Start cleaining...");
// clearTimeout(washingTimeOut);
// setTimeout(() => {
//   console.log("Cleaning finished!!!");
// }, 1000);

//REST API REpresentation State Transfer

//объект состояния здоровья
const healthStatus = {
  heartPres: "220 80", //сердеч. давление
  breathFreq: 50, //частота дыхания
  temp: 36.6, //температура тела
  skinColor: "white", //цвет кожи
};

console.log(JSON.stringify(healthStatus));

class HealthStatusRow {
  static render(data) {
    return `
        <tr>
              <td>${data.id}</td>
              <td>${data.dateCreatedAt}</td>
              <td>${data.temp}</td>
              <td>${data.breathFreq}</td>
              <td>${data.skinColor}</td>
          </tr>
        `;
  }
}

class Loader {
  static render() {
    return `<div class="lds-dual-ring"></div>`;
  }
}

function refreshTable() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const healthTable = document.querySelector("#healthTable");
  healthTable.innerHTML = Loader.render();

  fetch(
    "https://614b4903e4cc2900179eb020.mockapi.io/api/healthStatus/",
    requestOptions
  )
    .then((response) => response.json())
    .then((rows) => {
      healthTable.innerHTML = rows
        .map((row) => HealthStatusRow.render(row))
        .join("");
    })
    .catch((error) => console.log("error", error));
}

const refreshBtn = document.querySelector("#refreshBtn");
refreshBtn.onclick = () => {
  refreshTable();
};

const healthForm = document.querySelector("#healthForm");
healthForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const healthTemp = document.querySelector("#healthTemp").value;
  const healthBreathFreq = document.querySelector("#healthBreathFreq").value;
  const healthSkinColor = document.querySelector("#healthSkinColor").value;

  const newHealthRow = {
    breathFreq: healthBreathFreq, //частота дыхания
    temp: healthTemp, //температура тела
    skinColor: healthSkinColor, //цвет кожи
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    redirect: "follow",
    body: JSON.stringify(newHealthRow),
    headers: myHeaders,
  };
  fetch(
    "https://614b4903e4cc2900179eb020.mockapi.io/api/healthStatus/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
});
