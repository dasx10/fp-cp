/**
 * @param {FillValue} value to fill array section with
 * @returns {(array: any[]) => Array<FillValue>}
 * @template FillValue
 * @example
 * fillFull(3)(['a', 'b', 'c', 'd']); // [3, 3, 3, 3];
 */
function fillFull (value) {
    return function useFillFull (array) {
        const { length } = array;
        const newArray = new Array(length);
        let index = 0;
        while (index < length) {
            newArray[index] = value;
            index++;
        }
        return newArray;
    }
}

module.exports = fillFull;