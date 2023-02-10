export default class Client {
  private _name:string
  
  constructor(name:string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }

  set name(newValue: string) {
    if (newValue.length < 2) {
      throw new Error("Name must be greater than 2");
    }

    this._name = newValue
  }
}
