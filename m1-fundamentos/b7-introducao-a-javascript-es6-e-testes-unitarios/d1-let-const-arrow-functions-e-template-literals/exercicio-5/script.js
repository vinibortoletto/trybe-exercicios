const replaceLetterForName = (name) => {
  const sentence = 'x Bortoletto';
  return sentence.replace('x', name);
};

const fun = (sentence) => {
  const skills = ['html', 'css', 'js'];
  return `Principais habilidades de ${sentence}: ${skills}.`;
};

console.log(fun(replaceLetterForName('Vinicius')));
