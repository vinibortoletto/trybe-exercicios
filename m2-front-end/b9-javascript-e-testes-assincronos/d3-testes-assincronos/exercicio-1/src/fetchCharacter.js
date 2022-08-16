const fetchCharacter = async (id) => {
  try {
    const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
    const promiseFetch = await fetch(URL)
    const results = await promiseFetch.json();

    return results;
  } catch (error) {
    return error;
  }
};

// const fetchCharacter = async (id) => {
//   const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
//   const promise = fetch(URL)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => error);

//     return promise;
// };

module.exports = {
  fetchCharacter,
};
