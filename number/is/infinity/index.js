const complement = require("../../../function/compliment");

/**
 * @type {(value: any) => value is Infinity}
 */
const isInfinity = complement(isFinite)