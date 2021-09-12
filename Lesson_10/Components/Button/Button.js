export default class Button {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `<div class="btn">${this.text}</div>`;
  }
}
