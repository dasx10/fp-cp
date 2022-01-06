/**
 * @param {Value & string} value 
 * @returns {Capitalize<Value>}
 * @template Value
 */
function upperFirst (value) {
    return value.substr(0, 1).toUpperCase() + value.substr(1);
}

module.exports = upperFirst;