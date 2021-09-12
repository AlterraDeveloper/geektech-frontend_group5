import Button from "./Components/Button/Button";
import { menu } from "./Models/Menu";
import {} from "./Helpers/ArrayExt";

const appContainer = document.getElementById("app");

let menuFilter = "All";

const buttons = ["All"].concat(menu.map((x) => x.category).distinct());
const buttonsComponents = buttons.map((buttonText) => new Button(buttonText));
const buttonsContainer = appContainer.querySelector("#buttons");
buttonsContainer.innerHTML = buttonsComponents.reduce(
  (renderData, btn) => (renderData += btn.render()),
  ""
);
buttonsContainer.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    menuFilter = event.target.innerText;
    renderMenu(filterMenu(menu, menuFilter));
    Array.from(event.target.parentNode.children).forEach((x) =>
      x.classList.remove("active")
    );
    event.target.classList.add("active");
  });
});

renderMenu(filterMenu(menu, menuFilter));

function renderMenu(menuItems) {
  const menuContainer = appContainer.querySelector("#menu");
  menuContainer.innerHTML = menuItems.reduce(
    (renderData, menuItem) => (renderData += menuItem.render()),
    ""
  );
}

function filterMenu(menuItems, filter) {
  return menuItems.filter((x) =>
    filter === "All" ? true : x.category === filter
  );
}
