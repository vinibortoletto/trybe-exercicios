const fs = require('fs').promises;

const getChar = async (selectedCharId) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charList = JSON.parse(fileContent);

  const selectedChar = charList.find(
    (char) => Number(char.id) === selectedCharId
  );

  if (!selectedChar) throw new Error('Personagem não encontrado.');
  return selectedChar;
};

module.exports = { getChar };
