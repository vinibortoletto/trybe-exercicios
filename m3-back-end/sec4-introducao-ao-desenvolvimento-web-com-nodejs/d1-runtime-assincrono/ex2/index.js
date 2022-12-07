const { questionInt } = require('readline-sync');
const { addCharToSimpsonsFamily } = require('./addCharToSimpsonsFamily');
const { getChar } = require('./getChars');
const { getSimpsonsFamily } = require('./getSimpsonsFamily');
const { printChars } = require('./printChars');
const { removeChar } = require('./removeChar');

const main = async () => {
  // await printChars();
  // const selectedCharId = questionInt('Digite o ID de um personagem:');
  // const selectedChar = await getChar(selectedCharId);
  // console.log(`Personagem selecionado: ${selectedChar.name}`);
  // await removeChar(1);
  // await getSimpsonsFamily();

  await addCharToSimpsonsFamily();
};

main();
