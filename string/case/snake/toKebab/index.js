/**
 * @param {string} string 
 * @returns {string}
 */
function snakeToKebabCase (string) {
    return string.replace(/-/g, '_');
}

module.exports = snakeToKebabCase;