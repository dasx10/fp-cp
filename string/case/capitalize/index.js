/**
 * 
 * @param {Value & string} string 
 * @returns {Capitalize<Lowercase<Value>>}
 * @template Value 
 */
function capitalize (string) {
    switch (string.length) {
        case 0 : return '';
        case 1 : return string[0].toUpperCase();
        default: return string[0].toUpperCase() + string.substr(1).toLowerCase()
    }
}

module.exports = capitalize;
