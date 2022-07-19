const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
/* 
  Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

*/

const addNightShift = (object, key, value) => (object[key] = value);
// addNightShift(lesson2, 'turno', 'noite');

const listObjectKeys = (object) => Object.keys(object);
// listObjectKeys(lesson1);

const displayObjectLength = (object) => Object.entries(object).length;
// console.log(displayObjectLength(lesson1));

const listObjectValues = (object) => Object.values(object);
// console.log(listObjectValues(lesson1));

const allLessons = Object.assign(
  {},
  { lesson1: lesson1, lesson2: lesson2, lesson3: lesson3 }
);
// console.table(allLessons);

const totalNumberOfStudents = () => {
  let total = 0;
  const allLessonsEntries = Object.entries(allLessons);

  for (const lesson of allLessonsEntries) total += lesson[1].numeroEstudantes;
  console.log(total);
};
// totalNumberOfStudents();

const getValueByIndex = (object, index) => Object.values(object)[index];
// console.log(getValueByIndex(lesson1, 0));

const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  let isEqual = false;

  entries.forEach((entry) => {
    if (entry.includes(key) && entry.includes(value)) isEqual = true;
  });

  return isEqual;
};
// console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
