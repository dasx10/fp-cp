/**
 * @param {string} string 
 * @returns {number}
 */
function wordsLength (string) {
    return string.trim().replace(/ {2,}/g, ' ').split(' ').length;
}

module.exports = wordsLength;