const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const countLetterA = () => {
  return names.reduce((counter, name) => {
    const letters = name.split('');
    letters.forEach((letter) => letter.toLowerCase() === 'a' && (counter += 1));
    return counter;
  }, 0);
};

console.log(countLetterA());
