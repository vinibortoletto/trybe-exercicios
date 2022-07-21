const { encode, decode } = require('./encodeDecode');

describe('encode and decode', () => {
  it('1. should be functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('2. should return a string with the same length as the parameter', () => {
    const sentence = 'test sentence';
    const encodedSentence = encode(sentence);
    const decodedSentence = decode(encodedSentence);

    expect(encodedSentence.length).toBe(sentence.length);
    expect(decodedSentence.length).toBe(sentence.length);
  });
});

describe('encode', () => {
  it('1. should convert "aeiou" to "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('2. should not convert "bcdfg"', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
  });
});

describe('decode', () => {
  it('1. should covert "12345" to "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('2. should not convert "67890"', () => {
    expect(encode('67890')).toBe('67890');
  });
});
