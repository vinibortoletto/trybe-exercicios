import Person from "./Person";

export default class Teacher extends Person {
  constructor(
    name: string, 
    birthDate: Date,
    private _salary: number,
    private _subject: string
    ) {
    super(name, birthDate)
  }

  get salary():number {
    return this._salary
  }

  set salary(newValue: number) {
    if (newValue < 0) {
      throw new Error("Salary cannot be lesser than 0");
    }

    this._salary = newValue
  }

  get subject():string {
    return this._subject
  }
}
