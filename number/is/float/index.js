const pipe       = require("../../../function/pipe");
const complement = require("../../../function/compliment");
const isInteger  = require("../integer");
const isNumber   = require("../number");

/**
 * @type {(value: any) => value is number}
 */
const isFloat = pipe(isNumber, complement(isInteger), isFinite);