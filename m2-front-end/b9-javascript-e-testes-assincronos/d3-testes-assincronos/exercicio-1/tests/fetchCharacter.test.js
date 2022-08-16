require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

const wonderWoman = {
  response: 'success',
  id: '720',
  name: 'Wonder Woman',
  powerstats: {
    intelligence: '88',
    strength: '100',
    speed: '79',
    durability: '100',
    power: '100',
    combat: '100',
  },
  biography: {
    'full-name': 'Diana Prince',
    'alter-egos': 'No alter egos found.',
    aliases: [
      'Princess Diana',
      'Princess of the Amazons',
      'Goddess of Truth',
      ' Wondy',
      'Wonder Girl',
      'The Amazon Princess',
    ],
    'place-of-birth': 'Themyscira',
    'first-appearance': 'All-Star Comics #8 (December, 1941)',
    publisher: 'DC Comics',
    alignment: 'good',
  },
  appearance: {
    gender: 'Female',
    race: 'Amazon',
    height: ["6'0", '183 cm'],
    weight: ['165 lb', '74 kg'],
    'eye-color': 'Blue',
    'hair-color': 'Black',
  },
  work: {
    occupation:
      'Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth',
    base: '-',
  },
  connections: {
    'group-affiliation':
      'Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)',
    relatives:
      'Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)',
  },
  image: {
    url: 'https://www.superherodb.com/pictures2/portraits/10/100/807.jpg',
  },
};

const noUrlError = new Error('You must provide an url');

describe('fetchCharacter', () => {
  it('1. should be a function', () => {
    expect(typeof fetchCharacter).toBe('function');
  });

  it('2. should return character name Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
    expect(character.name).not.toBe('Superman');
  });

  it('3. should return error if no parameters were passed', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(noUrlError);
  });

  it('4. should return Wonder Woman character object', async () => {
    await expect(fetchCharacter('720')).resolves.toEqual(wonderWoman);
  });

  it('5. should return an error', async () => {
    await expect(fetchCharacter()).resolves.toEqual(noUrlError)
  });

  it('6. should return "Invalid id" if parameter exists but is invalid', async () => {
    const result = await fetchCharacter('invalid');
    expect(result).toBe('Invalid id');
    expect(result).not.toBe('false positive check');
  });

  it('7. should called with correct endpoint', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('8. should call fetch 6 times', () => {
    expect(fetch).toHaveBeenCalledTimes(6);
  });

  // it('9. should have 2 assertions', () => {
  //   expect.assertions(2);
  //   const callback1 = () => {
  //     return 1;
  //   };

  //   const callback2 = () => {
  //     return 2;
  //   };

  //   const test = (callback1, callback2) => {
  //     callback1();
  //     callback2();
  //   };

  //   test()
  // });
});
