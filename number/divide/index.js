/**
 * @param {number} divider 
 * @return {(number: number) => number}
 */
function divide (divider) {
    function useDivide (number) {
        return number / divider;
    }
}

module.exports = divide;