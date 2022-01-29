/**
 * @param {string} value 
 * @returns {string}
 */
function pascalToCamelCase (value) {
    switch (value.length) {
        case 0 : return '';
        case 1 : return value[0].toLowerCase();
        default: return value[0].toLowerCase() + value.substr(1);
    }
}

module.exports = pascalToCamelCase;