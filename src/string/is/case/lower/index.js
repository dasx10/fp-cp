/**
 * @param {string} string 
 * @returns {boolean}
 */
function isLower (string) {
    return string.toUpperCase() !== string && string.toLowerCase() === string; 
}

module.exports = isLower;