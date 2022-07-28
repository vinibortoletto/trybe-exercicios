const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const getMonths = ({ spring, summer, autumn, winter }) => {
  const months = [...spring, ...summer, ...autumn, ...winter];
  return months;
};

console.log(getMonths(yearSeasons));
