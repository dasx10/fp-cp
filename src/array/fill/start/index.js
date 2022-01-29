/**
 * @description return a new array with a filled section
 * @param {FillValue} value placeholder value
 * @param {number} [start=0] start index fill
 * @returns {<ArrayElement>(array: ArrayElement[]) => Array<FillValue | ArrayElement>} `(value|arrayValue)[]`
 * @template FillValue
 * @see fill
 * @example
 * fillStart(1)   (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fillStart(3, 2)(['a', 'b', 'c', 'd']); // ['a', 3, 3, 3];
 */
function fillStart (value, start = 0) {
    return function useFillStart (array) {
        const { length } = array;
        const newArray = new Array(length);
        let index = 0;
        while (index < start) {
            newArray[index] = array[index];
            index++;
        }

        index = start;
        while (index < length) {
            newArray[index] = value;
            index++;
        }

        return newArray;
    }
}

module.exports = fillStart;