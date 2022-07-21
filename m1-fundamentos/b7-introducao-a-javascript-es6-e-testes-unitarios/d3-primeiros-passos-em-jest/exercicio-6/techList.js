const techList = (listOfTech, studentName) => {
  const sortedTechArray = listOfTech.sort();
  let techArray = [];

  if (listOfTech.length === 0) return 'Vazio!';

  sortedTechArray.forEach((tech) => {
    techArray.push({
      tech: tech,
      name: studentName,
    });
  });

  return techArray;
};

module.exports = techList;
