/**
 * @param {Value & string} value 
 * @returns {Capitalize<Value>}
 * @template Value
 */
function upperFirst (value) {
    switch (value.length) {
        case 0 : return '';
        case 1 : return value[0].toUpperCase();
        default: return value[0].toUpperCase() + value.substr(1);
    }
}

module.exports = upperFirst;