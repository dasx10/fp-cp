/**
 * 
 * @param {Value & string} string 
 * @returns {Capitalize<Lowercase<Value>>}
 * @template Value 
 */
function capitalize (string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase();
}

module.exports = capitalize;
