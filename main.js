// Print the greeting on a single line below.
function square(n) {
    return n ** 2
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
console.log(square(n));
