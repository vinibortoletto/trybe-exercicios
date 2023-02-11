export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue.length < 2) {
      throw new Error('Name must have at least 2 letters');
    }

    this._name = newValue;
  }
}
