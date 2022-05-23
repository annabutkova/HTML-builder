const fs = require('fs');
const path = require('node:path');
const stylesPath = path.join(__dirname, '/styles/');
const dist = path.join(__dirname, '/project-dist/bundle.css');


const doBundleCSS = async (folder) => {
  const files = await fs.promises.readdir(folder);
  try {
    for (const file of files)
      fs.stat(folder + file, (err, stats) => {
        if (stats.isFile() && path.parse(file).ext == '.css') {
          const readStream = fs.createReadStream(folder + file);
          readStream.on('data', function (chunk) {
            fs.writeFile(dist, chunk, { flag: 'a+' }, function (error) {
              if (error) throw error;
            });
          });
      
        }
      });
  } catch (err) {
    console.error(err);
  }
};

doBundleCSS(stylesPath);