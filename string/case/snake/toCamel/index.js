const capitalizes = require("../../../../array/map/capitalizes");

/**
 * @param {string} string
 */
function snakeToCamelCase (string) {
    const words = string.split('_');
    return words.shift() + capitalizes(words);
}

module.exports = snakeToCamelCase;