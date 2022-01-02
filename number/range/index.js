const pipe = require("../../function/pipe")
const max  = require("../max")
const min  = require("../min")

function range (minimum, maximum) {
    return pipe(min(minimum), max(maximum));
}

module.exports = range;