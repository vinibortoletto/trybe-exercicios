export default class Item {
  private _name: string;
  private _price: number;

  constructor(
    name: string, 
    price: number
  ) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue.length < 2) {
      throw new Error("Name must have at least 2 letters");
    }

    this._name = newValue
  }

  get price(): number {
    return this._price;
  }

  set price(newValue:number) {
    if (newValue === 0) {
      throw new Error("Item price must be greater than 0");
    }

    this._price = newValue
  }
}
