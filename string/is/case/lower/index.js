/**
 * @param {string} string 
 * @returns {string}
 */
function isLower (string) {
    return string.toUpperCase() !== string && string.toLowerCase() === string; 
}

module.exports = isLower;