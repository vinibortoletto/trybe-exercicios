type TMonth =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

export default class Date {
  private _day: number;
  private _month: TMonth;
  private _year: number;

  constructor(day: number, month: TMonth, year: number) {
    this._day = day;
    this._month = month;
    this._year = year;
  }

  get day(): number {
    return this._day;
  }

  set day(newValue: number) {
    if (newValue === 0) {
      throw new Error('Day must be greater than 0');
    }

    this._day = newValue;
  }

  get month(): TMonth {
    return this._month;
  }

  set month(newValue: TMonth) {
    this._month = newValue;
  }

  get year(): number {
    return this._year;
  }

  set year(newValue: number) {
    this._year = newValue;
  }

}
