export default class MenuItem {
  constructor({ id, title, category, price, img, description }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.img = img;
    this.description = description;
  }

  render() {
    return `
        <article class="menu-item">
            <div class="menu-item-photo">
              <img src="${this.img}" alt="${this.title}" height="200" width="300" />
            </div>
            <div class="menu-item-content">
              <div class="menu-item-content-title">
                <span class="menu-item-content-name">${this.title}</span>
                <span class="menu-item-content-price">$${this.price}</span>
              </div>
              <div class="menu-item-content-description">${this.description}</div>
            </div>
        </article>`;
  }
}
