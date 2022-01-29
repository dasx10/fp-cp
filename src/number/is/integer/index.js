/**
 * @param {any} value 
 * @returns {value is number}
 */
function isInteger (value) {
    return (value ^ 0) === value;
}

module.exports = isInteger;