const students = require('./students');

const report = students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce((acc, curr) =>
    acc.nota > curr.nota ? acc : curr
  ).name,
}));

console.log(report);
