/**
 * @param {Value & string} value 
 * @returns {Uppercase<Value>}
 * @template Value
 */
function uppercase (value) {
    return value.toUpperCase();
}

module.exports = uppercase;