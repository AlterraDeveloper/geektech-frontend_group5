import Pet from "./Pet";
//Dog -> Pet -> Animal -> Object
export default class Dog extends Pet {
  constructor(nick, owner) {
    super(nick, owner);
  }
}
