const fs = require('fs');
const path = require('node:path');
const absolutePath = path.join(__dirname, '/text.txt',);

fs.promises.readFile(absolutePath, 'utf8').then((data) => {
  console.log(data);
});