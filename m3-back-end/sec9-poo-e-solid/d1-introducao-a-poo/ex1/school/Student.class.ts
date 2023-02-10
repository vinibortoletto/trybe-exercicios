export default class Student {
  private _name: string;
  private _registration: number;
  private _testGrades: [number, number, number, number];
  private _homeworkGrades: [number, number];

  constructor(
    name: string,
    registration: number,
    testGrades: [number, number, number, number],
    homeworkGrades: [number, number],
  ) {
    this._name = name;
    this._registration = registration;
    this._testGrades = testGrades;
    this._homeworkGrades = homeworkGrades;
  }

  public sumGrades(): number {
    const testGradesTotal = this._testGrades.reduce(
      (acc: number, grade: number) => acc + grade,
      0
    );

    const homeworkGradesTotal = this._homeworkGrades.reduce(
      (acc: number, grade: number) => acc + grade,
      0
    );

    return testGradesTotal + homeworkGradesTotal;
  }

  public averageGrades(): number {
    const total = this.sumGrades();
    return total / (this._testGrades.length + this._homeworkGrades.length);
  }
}
