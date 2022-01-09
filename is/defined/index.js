/**
 * @param {Value} value 
 * @return {value is Value extends undefined ? never : Value}
 * @template Value
 */
function isDefined (value) {
    return value !== void 0;
}

module.exports = isDefined;