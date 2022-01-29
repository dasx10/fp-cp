/**
 * @param {any} value 
 * @returns {value is boolean} 
 */
function isBoolean (value) {
    return value === true || value === false;
}

module.exports = isBoolean;