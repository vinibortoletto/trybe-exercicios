const fs = require('fs').promises;

const addCharToSimpsonsFamily = async () => {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const charList = JSON.parse(fileContent);
  const newChar = { id: `${charList.length + 1}`, name: 'Nelson Muntz' };
  const newCharList = [...charList, newChar];
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newCharList));
};

module.exports = { addCharToSimpsonsFamily };
