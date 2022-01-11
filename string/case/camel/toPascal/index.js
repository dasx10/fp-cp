/**
 * @param {string} value 
 * @returns {string}
 */
function camelToPascalCase (value) {
    switch (value.length) {
        case 0 : return '';
        case 1 : return value[0].toUpperCase();
        default: return value[0].toUpperCase() + value.substr(1)
    }
}

module.exports = camelToPascalCase;