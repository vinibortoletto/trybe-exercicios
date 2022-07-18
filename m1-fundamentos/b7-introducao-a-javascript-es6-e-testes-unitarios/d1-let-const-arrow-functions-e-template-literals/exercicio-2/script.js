// Normal arrow function ------------------------------------|
// const getFactorialNumber = (number) => {
//   let factorial = 0;

//   for (let i = number - 1; i >= 1; i -= 1) {
//     factorial += number * i;
//   }

//   return factorial;
// };

// console.log(getFactorialNumber(4));

// Recursive function -----------------------------------------|
const getFactorialNumber = (number) =>
  number > 1 ? number * getFactorialNumber(number - 1) : 1;

console.log(getFactorialNumber(4));

const pessoa = {
  name: 'Vinicius',
  idade: 28,
  habilidades: {
    code: ['html', 'js', 'css'],
    draw: [],
  },
};
