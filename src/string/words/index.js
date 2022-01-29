/**
 * @param {string} string 
 * @returns {string[]}
 */
function words (string) {
    return string.trim().replace(/ {2,}/g, ' ').split(' ');
}

module.exports = words;