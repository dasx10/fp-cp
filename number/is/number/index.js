/**
 * @param {any} value 
 * @returns {value is number}
 */
function isNumber (value) {
    return typeof value === 'number' && !isNaN(value);
}

module.exports = isNumber;