import sum from "../index";

/**
 * @param {number} x number
 * @returns {number} `increment = x + 1`
 * @example 
 * let value = 10;
 *     value = increment(value); // 11
 *     value = increment(value); // 12
 *     value = increment(value); // 13
 *     value = increment(value); // 14
 *     value = increment(value); // 15
 */
const increment = sum(1);
export default increment;
