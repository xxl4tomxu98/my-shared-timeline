#!/usr/bin/env node
const fs = require("fs");

if (process.argv.length !== 3) {
  console.log(`USAGE: ${process.argv[1]} path`);
  process.exit();
}
const theFile = process.argv[2];

fs.stat(theFile, (err, stats) => {
  if (stats.isFile()) {
    const readable = fs.createReadStream(theFile, 'utf-8');
    const handler = checkChunk(readable);
    readable.on('data', handler);
    readable.on('end', handler);
  }

  if (!stats.isFile() || err) {
    console.error(`Can only read file: ${theFile}`);
    process.exit(17);
  }

});

const data = [];
function checkChunk(readable) {
  let numberOfNewlines = 0;
  return chunk => {
    if (numberOfNewlines === 10) {
      return;
    }
    if (chunk === null || chunk === undefined) {
      return console.log(data.join('').trim());
    }
    for (let i = 0; i < chunk.length; i += 1) {
      if (chunk[i] === '\n') {
        numberOfNewlines += 1;
      }
      if (numberOfNewlines === 10) {
        console.log(data.join('') + chunk.substring(0, i));
        readable.destroy();
        return;
      }
    }
    data.push(chunk);
  }
}
