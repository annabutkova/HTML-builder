const fs = require('fs');
const path = require('node:path');
const absolutePath = path.join(__dirname, '/files/');


const copyDir = async (folder) => {

  fs.readdir(`${__dirname}/files-copy`, (err, files) => {
    if (err) {
      createDir();
    } else {

      for (const file of files) {
        fs.unlink((`${__dirname}/files-copy/${file}`), err => {
          if (err) throw err;
        });
      }
      createDir();
    }

  });

  async function createDir() {
    fs.promises.mkdir(`${__dirname}/files-copy`, { recursive: true });
    const files = await fs.promises.readdir(folder);
    try {
      for (const file of files) {
        fs.promises.copyFile(folder + file, `${__dirname}/files-copy/${file}`);
      }
    } catch (err) {
      console.error(err);
    }
  }


};

copyDir(absolutePath);