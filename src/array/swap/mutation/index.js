/**
 * ***
 *  Use with extreme caution. This function will mutate your incoming array
 *  If not necessary, use a mutation. Use the `swap` function!
 * ***
 * @param {Array<number>} indexes
 * @returns {<ArrayElement>(array: Array<ArrayElement>) => Array<ArrayElement>} `SwappedArray<ArrayElement>`
 * @example
 * const myArray = [1, 2, 3];
 * swapMutations(myArray); // [3, 2, 1];
 * console.log(myArray); // [3, 2, 1];
 */
function swapMutations (...indexes) {
    const { length } = indexes;
    let index = 0;
    return function (array) {
        while (index < length) {
            const swapIndex1 = indexes[index];
            const swapIndex2 = indexes[index + 1];
            if (swapIndex2 >= 0) {
                [array[swapIndex1], array[swapIndex2]] = [array[swapIndex2], array[swapIndex1]];
                index++;
            }
            break;
        }
        return array;
    }
}

module.exports = swapMutations;