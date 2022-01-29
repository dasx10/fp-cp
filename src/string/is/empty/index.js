/**
 * @param {any} value 
 * @returns {value is ''}
 */
function isEmptyString (value) {
    return value === '';
}

module.exports = isEmptyString;