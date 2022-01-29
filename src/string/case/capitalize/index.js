/**
 * 
 * @param {Value & string} string 
 * @returns {Capitalize<Lowercase<Value>>}
 * @template Value 
 */
function capitalize (string) {
    switch (string.length) {
        // @ts-ignore
        case 0 : return '';
        // @ts-ignore
        case 1 : return string[0].toUpperCase();
        // @ts-ignore
        default: return string[0].toUpperCase() + string.substr(1).toLowerCase()
    }
}

module.exports = capitalize;
