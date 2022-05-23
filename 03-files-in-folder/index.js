const fs = require('fs');
const path = require('node:path');


const absolutePath = path.join(__dirname, '/secret-folder/');

const getFiles = async (folder) => {
  const files = await fs.promises.readdir(folder);
  try {
    for (const file of files)
      fs.stat(folder + file, (err, stats) => {
        if(stats.isFile()){
          console.log(`${path.parse(file).name} - ${path.parse(file).ext.slice(1)} - ${stats.size/1024}kB`);
        }
      });
  } catch (err) {
    console.error(err);
  }
};

getFiles(absolutePath);