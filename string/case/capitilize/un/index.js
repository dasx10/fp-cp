/**
 * @param {Value & string} string 
 * @returns {Uncapitalize<Uppercase<Value>>}
 * @template Value 
 */
function uncapitalize (string) {
    switch (string.length) {
        case 0 : return '';
        case 1 : return string[0].toLowerCase();
        default: return string[0].toLowerCase() + string.substr(1).toUpperCase();
    }
}

module.exports = uncapitalize;