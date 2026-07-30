// Print the greeting on a single line below.
const n = Number(require('fs').readFileSync(0, 'utf-8').trim().split('\n'));
if (n % 3 === 0 && n % 5 === 0) {
  console.log('FizzBuzz');
} else if (n % 3 === 0) {
  console.log('Fizz');
} else if (n % 5 === 0) {
  console.log('Buzz');
} else console.log(n);

