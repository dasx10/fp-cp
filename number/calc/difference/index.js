/**
 * Will return a new function to calculate the difference
 * @param {number} x 
 * @returns {(y: number) => number} `difference = x - y`
 * @example
 * const difference10 = difference(10);
 * const resultFrom2  = dif10(2); // 8
 * const resultFrom3  = dif10(2); // 7
 */
const difference = x => y => x - y
module.exports = difference;