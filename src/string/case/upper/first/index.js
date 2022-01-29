/**
 * @param {Value} value 
 * @returns {Capitalize<Value>}
 * @template {string} Value
 */
function upperFirst (value) {
    switch (value.length) {
        // @ts-ignore
        case 0 : return '';
        // @ts-ignore
        case 1 : return value[0].toUpperCase();
        // @ts-ignore
        default: return value[0].toUpperCase() + value.substr(1);
    }
}

module.exports = upperFirst;