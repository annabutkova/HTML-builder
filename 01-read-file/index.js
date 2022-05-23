const fs = require('fs');
const path = require('node:path');
const absolutePath = path.join(__dirname, '/text.txt');

/* fs.promises.readFile(absolutePath, 'utf8')
  .then((data) => {
    console.log(data);
  }) 
  .catch(console.error); */
  
async function read (file) {
  try {
    let a = await fs.promises.readFile(file, 'utf-8');
    console.log(a);
  } catch (error) {
    console.error(error);
  }
}
read(absolutePath);