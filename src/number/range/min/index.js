/**
 * @param {number} minimum 
 * @returns {(number: number) => number}
 */
function min (minimum) {
    return function useMinimum (number) {
        return minimum < number ? minimum : number;
    }
}

module.exports = min;