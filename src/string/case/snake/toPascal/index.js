const capitalizeOf = require("../../../../array/map/capitalizeOf");

/**
 * @param {string} string
 */
function snakeToPascalCase (string) {
    return capitalizeOf(string.split('_')).join('');
}

module.exports = snakeToPascalCase;