const lessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },

  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  },

  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },
};

const countMathStudents = (object) => {
  const entries = Object.entries(object);
  let numberOfStudents = 0;

  entries.forEach((entry) => {
    if (entry[1].materia === 'Matemática') {
      numberOfStudents += entry[1].numeroEstudantes;
    }
  });

  return numberOfStudents;
};
// console.log(countMathStudents(lessons));

const teacherReport = (object, teacherName) => {
  let reportObject = {
    professor: teacherName,
    aulas: [],
    estudantes: 0,
  };

  const entries = Object.entries(object);

  entries.forEach((entry) => {
    if (entry[1].professor === teacherName) {
      reportObject.aulas.push(entry[1].materia);
      reportObject.estudantes += entry[1].numeroEstudantes;
    }
  });

  return reportObject;
};

console.log(teacherReport(lessons, 'Maria Clara'));
