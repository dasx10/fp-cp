/**
 * @param {string} string 
 * @returns {string}
 */
function kebabToSnakeCase (string) {
    return string.replace(/-/g, '_');
}

module.exports = kebabToSnakeCase;