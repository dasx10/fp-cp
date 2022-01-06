const clone         = require("../clone");
const swapMutations = require("./mutation");


/**
 * @param {Array<number>} indexes
 * @returns {<ArrayElement>(array: Array<ArrayElement>) => Array<ArrayElement>} `SwappedArray<ArrayElement>`
 * @example 
 * const myArray = [1, 2, 3];
 * swap(myArray); // [3, 2, 1];
 * console.log(myArray); // [1, 2, 3];
 */
function swap (...indexes) {
    return function useSwap (array) {
        const swappedArray = clone(array);
        return swapMutations(swappedArray);
    }
}

module.exports = swap;