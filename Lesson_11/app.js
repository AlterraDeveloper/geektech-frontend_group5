import TodoItem from "./Components/TodoItem";

const todolistContainer = document.querySelector("#todolist");

const todosContainer = todolistContainer.querySelector("#todos");
const todolistInputText = todolistContainer.querySelector(
  "#todolist-input-text"
);
const todolistSaveButton = todolistContainer.querySelector(
  "#todolist-input-button"
);
const todolistFilter = todolistContainer.querySelector(
  "#todolist-input-filter"
);

todolistFilter.addEventListener("change", function () {
  const selectedOption = this.children[this.selectedIndex];
  currentFilter = selectedOption.value;
  renderTodos(todosList);
});

todolistInputText.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    todosList.push(new TodoItem(event.target.value));
    renderTodos(todosList);
    event.target.value = "";
  }
});

todolistSaveButton.onclick = (event) => {
  const todoText = todolistInputText.value;
  if (todoText.trim() === "") return;
  todosList.push(new TodoItem(todoText));
  renderTodos(todosList);
  todolistInputText.value = "";
};

let currentFilter = "all";
const todosList = [
  new TodoItem("Buy laptop"),
  new TodoItem("Make homework"),
  new TodoItem("Take shower", true),
  new TodoItem("Learn English"),
  new TodoItem("Learn JavaScript"),
];

renderTodos(todosList);

function renderTodos(todos) {
  todos = todos.filter((todo) => {
    switch (currentFilter) {
      case "all":
        return true;
      case "completed":
        return todo.isCompleted;
      case "uncompleted":
        return !todo.isCompleted;
      default:
        return false;
    }
  });
  todosContainer.innerHTML = todos.map((todo) => todo.render()).join("");

  todos.forEach((todo) => {
    const todoElement = todosContainer.querySelector(`#${todo.todoId}`);
    const deleteBtn = todoElement.querySelector(`#${todo.deleteBtnId}`);
    const completeBtn = todoElement.querySelector(`#${todo.completeBtnId}`);

    deleteBtn.addEventListener("click", () => {
      const deletedTodoIndex = todos.findIndex((x) => x.todoId === todo.todoId);
      todos.splice(deletedTodoIndex, 1);
      renderTodos(todos);
    });

    completeBtn.onclick = () => {
      const completedTodoIndex = todos.findIndex(
        (x) => x.todoId === todo.todoId
      );
      todos[completedTodoIndex].isCompleted =
        !todos[completedTodoIndex].isCompleted;
      renderTodos(todos);
    };
  });
}
