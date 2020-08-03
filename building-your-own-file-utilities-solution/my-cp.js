#!/usr/bin/env node

const fs = require("fs");

let argv = process.argv;
const sourceFilePath = argv[2];
const targetFilePath = argv[3];
if(argv.length!==4){
  console.log("need two arguments");
}


fs.stat(sourceFilePath, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    console.error(`The path ${sourceFilePath} does not exist.`);
    process.exit(9);
  }

  if (stats.isDirectory()) {
    console.error(`The path ${sourceFilePath} is a directory.`);
    process.exit(10);
  }

fs.copyFile(sourceFilePath, targetFilePath, (err) => {
  if (err) throw err;
  console.log(`${sourceFilePath} was copied to ${targetFilePath} file`);
});
});
