export class Laptop {
  constructor(model, vendor, price) {
    this.model = model;
    this.vendor = vendor;
    this.price = price;
  }
}
//-> { Laptop : class}

export class Task {
  constructor(desc, priority, durationInDays) {
    this.desc = desc;
    this.priority = priority;
    this.durationInDays = durationInDays;
  }
}

export function sum(a, b) {
  return a + b;
}

export const LessonTheme = "NPM, JSON, Modules";
