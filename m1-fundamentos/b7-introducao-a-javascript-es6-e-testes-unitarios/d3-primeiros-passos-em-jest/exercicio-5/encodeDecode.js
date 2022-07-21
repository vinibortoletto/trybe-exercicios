const encode = (sentence) => {
  const codes = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let letter of sentence) {
    for (let key in codes) {
      if (key === letter) sentence = sentence.replace(letter, codes[key]);
    }
  }

  return sentence;
};

const decode = (sentence) => {
  const codes = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let letter of sentence) {
    for (let key in codes) {
      if (key === letter) sentence = sentence.replace(letter, codes[key]);
    }
  }

  return sentence;
};

module.exports = { encode, decode };
