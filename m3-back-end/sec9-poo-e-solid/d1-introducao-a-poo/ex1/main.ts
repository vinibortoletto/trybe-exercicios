import Student from "./school/Student.class";

const student = new Student('Vinicius', 1919, [10, 20, 30, 40], [10, 20])
const gradesTotalSum = student.sumGrades()
const gradesTotalAverage = student.averageGrades()

console.log("gradesTotalSum:", gradesTotalSum)
console.log('gradesTotalAverage:', gradesTotalAverage)


