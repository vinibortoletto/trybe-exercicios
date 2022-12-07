const fs = require('fs').promises;

const printChars = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charList = JSON.parse(fileContent);
  charList.forEach((char) => console.log(`${char.id} - ${char.name}`));
};

module.exports = { printChars };
