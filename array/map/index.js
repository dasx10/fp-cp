/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => Return} executor 
 * @returns {(array: ArrayElement[]) => Return[]}
 * @template ArrayElement, Return
 */
module.exports = function map(executor) {
    return function useMap (array) {
        const { length } = array;
        const mapped = new Array(length);
        let index = 0;
        while (index < length) {
            mapped[index] = executor(array[index], index, array);
            index++;
        }
        return mapped;
    }
}