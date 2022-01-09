const capitalizes = require("../../../../array/map/capitalizes");

/**
 * @param {string} string
 */
function snakeToPascalCase (string) {
    return capitalizes(string.split('_')).join('');
}

module.exports = snakeToPascalCase;