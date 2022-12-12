const fs = require('fs').promises;
const { join } = require('path');

const FILE_PATH = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, FILE_PATH), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (newFileContent) => {
  try {
    await fs.writeFile(join(__dirname, FILE_PATH)),
      JSON.stringify(newFileContent, null, 2);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (selectedChocolateId) => {
  const { chocolates } = await readCacauTrybeFile();
  const selectedChocolate = chocolates.find(
    (chocolate) => chocolate.id === selectedChocolateId
  );
  return selectedChocolate;
};

const getChocolateByBrand = async (selectedBrandId) => {
  const { chocolates } = await readCacauTrybeFile();
  const selectedBrandChocolateList = chocolates.filter(
    ({ brandId }) => brandId === selectedBrandId
  );
  return selectedBrandChocolateList;
};

module.exports = { getAllChocolates, getChocolateById, getChocolateByBrand };
