const reverse = require('../array/reverse');

const arr = new Array(30000000);
arr.fill(1);

console.time('rev');
// reverse(arr)
// arr.reverse();
console.timeEnd('rev');