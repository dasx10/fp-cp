/**
 * @param {string} string 
 * @returns {string}
 */
function isUpper (string) {
    return string.toLowerCase() !== string && string.toUpperCase() === string; 
}

module.exports = isUpper;