import Generator from "../Helpers/Generator";

export default class TodoItem {
  constructor(text, isCompleted = false) {
    this.text = text;
    this.isCompleted = isCompleted;
    this.todoId = Generator.generateId("todo-");
    this.deleteBtnId = Generator.generateId("todo-delele-btn-");
    this.completeBtnId = Generator.generateId("todo-complete-btn-");
  }

  render() {
    return `
        <div class="todolist-task ${this.isCompleted ? "completed" : ""}" 
        id="${this.todoId}">
            <p class="todolist-task-text">${this.text}</p>
            <button class="todolist-task-button success" id="${
              this.completeBtnId
            }">complete</button>
            <button class="todolist-task-button danger" id="${
              this.deleteBtnId
            }">delete</button>
        </div>`;
  }
}
