const pipe       = require("../../../function/pipe");
const complement = require("../../../function/compliment");
const isInteger  = require("../integer");
const isNumber   = require("../number");

/**
 * @type {(value: any) => value is number}
 */
// @ts-ignore
const isFloat = pipe(isNumber, isFinite, complement(isInteger));