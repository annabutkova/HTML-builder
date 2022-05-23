const fs = require('fs');
const path = require('node:path');
const absolutePath = path.join(__dirname, '/files/');


const copyDir = async (folder) => {
  fs.promises.mkdir(`${__dirname}/files-copy`, { recursive: true });
  const files = await fs.promises.readdir(folder);
  try {
    console.log(files);
    for (const file of files) {
      fs.promises.copyFile(folder + file, `${__dirname}/files-copy/${file}`);
    }
  } catch (err) {
    console.error(err);
  }
};

copyDir(absolutePath);