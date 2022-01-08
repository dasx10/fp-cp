/**
 * @param {ArrayElement[]} array 
 * @returns {ArrayElement[]}
 * @template ArrayElement
 */
function uniq (array) {
    return [...new Set(array)];
}

module.exports = uniq;