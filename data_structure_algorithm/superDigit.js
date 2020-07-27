'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});


function superDigit(n, k) {
  n = n.split("").reduce((a, b) => +a + +b) * k + "";
  return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
}


function main() {
  const ws = fs.createWriteStream(process.env.stdout);

  const nk = readLine().split(' ');

  const n = nk[0];

  const k = parseInt(nk[1], 10);

  const result = superDigit(n, k);

  ws.write(result + '\n');

  ws.end();
}
