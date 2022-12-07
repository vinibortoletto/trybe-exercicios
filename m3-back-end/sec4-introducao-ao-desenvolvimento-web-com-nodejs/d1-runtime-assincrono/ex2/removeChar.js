const fs = require('fs').promises;

const removeChar = async (removeCharId) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charList = JSON.parse(fileContent);
  const newCharList = charList.filter(
    (char) => Number(char.id) !== removeCharId
  );

  await fs.writeFile('./simpsons.json', JSON.stringify(newCharList));
};

module.exports = { removeChar };
