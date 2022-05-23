Пусть в папке проекта определен некоторый файл hello.txt. Скопируем его содержимое в новый файл some.txt:

const fs = require('fs')

let readableStream = fs.createReadStream(
  'hello.txt',
  'utf8'
)

let writeableStream = fs.createWriteStream('some.txt')

readableStream.pipe(writeableStream)
