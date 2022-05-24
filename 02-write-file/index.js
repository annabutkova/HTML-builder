const fs = require('fs');
const path = require('node:path');
const absolutePath = path.join(__dirname, '/text.txt');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addText() {
  console.log('Привет!');
  try {
    console.log('Введите текст. Для выхода введите команду exit\n');
    rl.on('line', line => {
      if (line == 'exit' || line == 'EXIT' || line == 'Exit') {
        rl.close();
      }
      line = line + '\n';
      fs.writeFile(absolutePath, line, { flag: 'a+' }, function (error) {
        if (error) throw error;
      });
    }).on('close', () => {
      console.log('Ваш текст сохранен');
      process.exit(0);
    });
  } catch (err) {
    console.log(err);
  }
}
addText();
