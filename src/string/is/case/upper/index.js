/**
 * @param {string} string 
 * @returns {boolean}
 */
function isUpper (string) {
    return string.toLowerCase() !== string && string.toUpperCase() === string; 
}

module.exports = isUpper;