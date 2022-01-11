/**
 * @param {Value & string} value 
 * @returns {Uncapitalize<Value>}
 * @template Value
 */
function lowerFirst (value) {
    switch (value.length) {
        case 0 : return '';
        case 1 : return value[0].toLowerCase();
        default: return value[0].toLowerCase() + value.substr(1);
    }
}

module.exports = lowerFirst;