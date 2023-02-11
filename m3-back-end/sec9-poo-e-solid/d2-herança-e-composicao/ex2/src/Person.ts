export default class Person {
  constructor(private _name: string, private _birthDate: Date) {}

  static getAge(newBirthDate: Date): number {
    const timeDiff = Math.abs(Date.now() - new Date(newBirthDate).getTime());

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length < 2) {
      throw new Error('Name must have at least 2 letters');
    }

    this._name = newName;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(newBirthDate: Date) {
    const today = new Date();
    const age = Person.getAge(newBirthDate);

    if (newBirthDate > today) {
      throw new Error('Birth date cannot be a future date');
    }

    if (age >= 120) {
      throw new Error('Person cannot be more than 120 years old');
    }

    this._birthDate = newBirthDate;
  }
}
