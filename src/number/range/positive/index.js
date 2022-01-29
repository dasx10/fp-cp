/**
 * @param {any} value 
 * @returns {number}
 */
function positive (value) {
    return value >= 0 ? value : 0;
}

module.exports =  positive;