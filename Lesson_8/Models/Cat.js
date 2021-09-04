import Pet from "./Pet";

//Cat -> Pet -> Animal -> Object
export default class Cat extends Pet {
  constructor(nick, owner) {
    super(nick, owner);
  }

  makeVoice() {
    super.makeVoice();
    console.log("Meoowww");
  }
}
