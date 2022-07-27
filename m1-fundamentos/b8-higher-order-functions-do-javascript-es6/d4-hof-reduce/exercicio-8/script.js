const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const studentsGrades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = () => {
  return students.map((student, index) => ({
    name: student,
    average:
      studentsGrades[index].reduce((average, grade) => average + grade, 0) /
      studentsGrades[index].length,
  }));
};

console.log(studentAverage());
