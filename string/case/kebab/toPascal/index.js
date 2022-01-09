const capitalizes = require("../../../../array/map/capitalizes");

/**
 * @param {string} string 
 * @returns 
 */
function kebabToPascalCase (string) {
    return capitalizes(string.split('-')).join('');
}

module.exports = kebabToPascalCase;