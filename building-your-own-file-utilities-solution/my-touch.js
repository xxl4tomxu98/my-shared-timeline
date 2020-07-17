#!/usr/bin/env node
const fs = require("fs");

const newFile = process.argv.slice(2);
if (newFile.length !== 1) {
  console.log(`USAGE: ${process.argv[1]} path`);
  process.exit();
}

fs.stat(newFile[0], (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.appendFile(newFile[0], '', (err) => {
      if (err) throw err;
      console.log(`${newFile[0]} is open`);
    });
  }

  if (err) throw err;

  if (stats.isDirectory()) {
    console.error(`Cannot touch directories: ${newFile[0]}`);
    process.exit(2);
  }

  if (stats.isFile()) {
    return fs.utimes(newFile[0], stats.atime, new Date(), err => {
      if (err) throw err;
    });
  }
});
