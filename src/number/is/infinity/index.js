const complement = require("../../../function/compliment");

/**
 * @type {(value: any) => value is Infinity}
 */
// @ts-ignore
const isInfinity = complement(isFinite)
module.exports = isInfinity;