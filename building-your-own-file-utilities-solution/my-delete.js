#!/usr/bin/env node
const fs = require("fs");

const [_, __, ...arguments] = process.argv;
if (arguments.length === 0) {
  console.log("USAGE: ./rm.js path[, path[, path...]]");
  process.exit();
}
arguments.forEach(path =>{
  fs.unlink(path, (err) => {
    if (err) throw err;
    console.log(`successfully deleted ${path}`);
  });
});
