const fs = require('fs').promises;

const getSimpsonsFamily = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charList = JSON.parse(fileContent);
  const simpsonsCharList = charList.filter((char) => char.id <= 5);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsCharList));
};

module.exports = { getSimpsonsFamily };
