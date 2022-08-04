// const userFullName = ({ firstName, lastName }) =>
//   `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) =>
//   `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
//   };
//   return callback(userToReturn);
// };

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

// ------------------------------------------------------|

const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName);
getUser(userNationality);
