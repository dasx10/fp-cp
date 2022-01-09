const capitalizes = require("../../../../array/map/capitalizes");

/**
 * @param {string} string 
 * @returns 
 */
function kebabToCamelCase (string) {
    const words = string.split('-');
    return words.shift() + capitalizes(words).join('');
}

module.exports = kebabToCamelCase;