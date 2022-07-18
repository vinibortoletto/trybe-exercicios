const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Sort array ref:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortArray = () => {
  const sortedArray = oddsAndEvens.sort((a,b) => {return a - b});
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);
}

sortArray()

