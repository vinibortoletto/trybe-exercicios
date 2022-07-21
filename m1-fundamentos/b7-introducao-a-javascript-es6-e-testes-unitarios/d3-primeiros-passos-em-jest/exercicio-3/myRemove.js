const myRemove = (array, item) => {
  for (let index = 0; index < array.length; index += 1) {
    if (item === array[index]) array.splice(index, 1);
  }

  return array;
};

module.exports = myRemove;
