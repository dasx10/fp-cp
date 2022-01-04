// @ts-check
const pipe = require("../../function/pipe")
const max  = require("../max")
const min  = require("../min")

/**
 * @param {number} minimum
 * @param {number} maximum
 * @return {(number: number) => number}
 */
function range (minimum, maximum) {
    return pipe(min(minimum), max(maximum));
}

module.exports = range;

const a = pipe(min(2), max(3))('')