import Person from './Person';

export default class Student extends Person {
  private _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(newValue: string) {
    this._enrollment = newValue;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newValue: number[]) {
    if (newValue.length > 4)  {
      throw new Error("Student cannot have more than 4 exam's grades");
    }

    this._examsGrades = newValue;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(newValue: number[]) {
    if (newValue.length > 2)  {
      throw new Error("Student cannot have more than 2 assignment's grades");
    }

    this._assignmentsGrades = newValue;
  }

  public sumGrades(): number {
    const grades = [...this.examsGrades, ...this._assignmentsGrades];
    return grades.reduce((acc: number, grade: number) => acc + grade, 0);
  }

  public sumAverageGrade():number {
    const numberOfGrades = this.examsGrades.length + this._assignmentsGrades.length
    return this.sumGrades() / numberOfGrades
  }

  private generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `STU${randomStr}`;
  }
}
