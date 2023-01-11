const fs = require('fs').promises

const writeFiles = async () => {
  const textList = [
    'Finalmente',
    'estou',
    'usando',
    'Promise.all',
    '!'
  ]

  const writeFilesPromises = textList.map(async (text, index) => (
    fs.writeFile(`./file${index + 1}.txt`, text)
  ))

  await Promise.all(writeFilesPromises)
}

const readFiles = async () => {
  await writeFiles()

  const filenameList = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ]

  const readFilesPromises = filenameList.map(async (filename) => (
    fs.readFile(filename, 'utf-8')
  ))

  const fileContentList = await Promise.all(readFilesPromises)
  await fs.writeFile('./fileAll.txt', fileContentList.join(' '))
};

readFiles()