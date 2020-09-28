const fs = require('fs');

const results = JSON.parse(fs.readFileSync('./score.json', 'utf-8'));

const score = results
  .testResults
  .map(o => {
    if (o.assertionResults.length > 0) {
      return o.assertionResults.map(a => {
        if (a.failureMessages.length > 0) {
          return a.title;
        }
        return '(0 points)';
      });
    }
    if (o.status === 'failed') {
      return ['(10 points) Entire test module failed'];
    }
    return ['(0 points)'];
  })
  .reduce((acc, x) => [...acc, ...x], [])
  .map(x => x.substring(1))
  .map(x => Number.parseInt(x))
  .reduce((acc, x) => acc - x, 100);

console.log();
console.log('*******************');
console.log('* SCORE:', score);
console.log('*******************');
