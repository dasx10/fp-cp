/**
 * 
 * @param {any} value 
 * @returns {number}
 */
function negative (value) {
    return value <= -0 ? value : -0;
}

module.exports = negative;