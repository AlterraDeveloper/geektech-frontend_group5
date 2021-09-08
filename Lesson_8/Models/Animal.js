//Animal -> Object
export default class Animal {
  constructor() {
    console.log(`Build class ${this.constructor.name}`);
  }

  makeVoice() {
    console.log(`${this.constructor.name} says something...`);
  }

  someFunc(){
    
  }
}
