import Animal from "./Animal";

//Pet -> Animal -> Object
export default class Pet extends Animal {
  constructor(nick, owner, isVacinated = false) {
    super();
    this.nick = nick;
    this.owner = owner;
    this.isVacinated = isVacinated;
  }

  makeVoice() {
    console.log(`I'm ${this.constructor.name} and I stay at home`);
  }
}
