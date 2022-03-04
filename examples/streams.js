var fs = require('fs');
var zlib = require('zlib');

var data = '';
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.zip');

readerStream.setEncoding("UTF8");
readerStream
    .pipe(zlib.createGzip())
    .pipe(writerStream);

readerStream.on('data', (chunk) => {
    data += chunk;
});

readerStream.on('end', () => {
    console.log(data);
});