const fs = require('fs');
const path = require('node:path');
const absolutePath = path.join(__dirname, '/text.txt');


const stream = fs.createReadStream(absolutePath);

stream.on('data', function (chunk) {
  console.log(chunk.toString());
});
