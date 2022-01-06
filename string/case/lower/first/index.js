/**
 * @param {Value & string} value 
 * @returns {Uncapitalize<Value>}
 * @template Value
 */
function lowerFirst (value) {
    return value.substr(0, 1).toLowerCase() + value.substr(1);
}

module.exports = lowerFirst;