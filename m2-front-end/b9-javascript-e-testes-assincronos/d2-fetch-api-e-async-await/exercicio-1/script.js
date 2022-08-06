const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'httpapi.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado: ${error}`));
};

fetchJoke();
