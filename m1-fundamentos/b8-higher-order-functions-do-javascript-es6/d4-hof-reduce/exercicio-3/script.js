const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = () => {
  return arrays.reduce((finalArray, array) => finalArray.concat(array));
};

console.log(flatten());
