/**
 * @param {number} minimum
 * @param {number} maximum
 * @return {(number: number) => number}
 */
function range (minimum, maximum) {
    return function useRange (value) {
        return value < minimum ? minimum : value > maximum ? maximum : value;
    }
}

module.exports = range;