/**
 * Will return a new function to calculate the difference
 * @param {number} differences 
 * @returns {(number: number) => number}
 */
function difference (differences) {
    return function useDifference (number) {
        return number - differences;
    }
}

module.exports = difference;