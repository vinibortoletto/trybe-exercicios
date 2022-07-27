const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfo = { ...user, ...jobInfos };

const {
  name: firstName,
  age,
  nationality,
  profession,
  squadInitials,
  squad,
} = userInfo;

const sentence = `Hi, my name is ${firstName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(sentence);
