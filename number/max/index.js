/**
 * @param {number} firstNumber 
 * @returns {(number: number) => number}
 */
function max (maximum) {
    return function useMaximum (number) {
        return maximum > number ? maximum : number;
    }
}

module.exports = max;