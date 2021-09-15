export default class Generator {
  static generateId(prefix = "", postfix = "") {
    const datePart = new Date().toISOString().replace(/\D/g, "");
    const randomPart = this.getRandomNumber(0, 1000)
      .toString()
      .padStart(5, "0");

    return `${prefix}${datePart}${randomPart}${postfix}`;
  }
  static getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
