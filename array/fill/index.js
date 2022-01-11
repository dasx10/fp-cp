/**
 * @description return a new array with a filled section
 * @param {FillValue} value placeholder value
 * @param {number} [start=0] start index fill
 * @param {number} [end] 
 * @returns {<ArrayElement>(array: ArrayElement[]) => Array<FillValue | ArrayElement>}
 * @template FillValue
 * @example 
 * fill(1)      (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fill(1, 1)   (['a', 'b', 'c', 'd']); // ['a', 1, 1, 1];
 * fill(1, 0, 2)(['a', 'b', 'c', 'd']); // [1, 1, 1, 'd'];
 */
function fill (value, start, end) {
    return function useFill (array) {
        const { length } = array;
        const stop = end || length;
        const newArray = new Array(length);
        let index = 0;
        const first = start || 0;
        while (index < first) {
            newArray[index] = array[index];
            index++;
        }

        index = first;
        while (index < stop) {
            newArray[index] = value;
            index++;
        }

        index = stop;
        while (index < length) {
            newArray[index] = array[index];
            index++;
        }

        return newArray;
    }
}

module.exports = fill;