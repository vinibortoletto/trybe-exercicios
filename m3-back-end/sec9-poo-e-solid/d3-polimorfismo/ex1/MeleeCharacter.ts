import Character from "./Character";

export default class MeleeCharacter extends Character {
  constructor(
    private _name: string,
    private _specialMoveName:string
  ) {
    super()
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}.`);
  }

  specialMove(): void {
    console.log(`${this._name} special move is ${this._specialMoveName}`);
  }
}
