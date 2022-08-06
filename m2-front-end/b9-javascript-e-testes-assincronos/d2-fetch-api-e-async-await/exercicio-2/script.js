// const fetch = require('node-fetch');

const displayJoke = ({ joke }) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerText = joke;
};

const fetchJoke = () => {
  const API_URL = 'https://icanhazdadjoke.com/';
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => displayJoke(data))
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();
