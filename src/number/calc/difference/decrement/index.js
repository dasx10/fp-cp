/**
 * @param {number} value 
 * @returns {number} `decrement = value - 1`
 * @example 
 * let value = 5;
 * value = decrement(value); //  4
 * value = decrement(value); //  3
 * value = decrement(value); //  2
 * value = decrement(value); //  1
 * value = decrement(value); //  0
 * value = decrement(value); // -1
 * value = decrement(value); // -2
 */
const decrement = value => value - 1;
module.exports   = decrement;