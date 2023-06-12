// const fs = require('fs')
// const TransformStream = require('stream').Transform;

// const readStream = fs.createReadStream(__dirname + './test.txt');
// const writestream = fs.createWriteStream(__dirname + './newFile.txt');
// const transFormedStream = new TransformStream({
//     transform(chunk, enc, cb) {
//         this.push(chunk.toString().toUpperCase());
//         setTimeout(cb, 3000);
//     }
// });
// const filestream = process.stdout;

// const outputStream = readStream.pipe(TransformedStream);
// outputStream.pipe(writestream);
// outputStream.pipe(filestream);
const fs = require('fs');
const TransformStream = require('stream').Transform;
const readstream = fs.createReadStream(__dirname + '/testFile.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/newFile.txt');
const transFormedStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000);
    }
});
const writeStream = process.stdout;
const outputSteam = readstream.pipe(transFormedStream);

outputSteam.pipe(writeStream);
outputSteam.pipe(fileWriteStream);