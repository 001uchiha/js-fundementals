// Print the greeting on a single line below.
const word = require('fs').readFileSync(0, 'utf-8').trim();
const result = word.split('').reverse().join('');
console.log(result);

