/**
 * @param {FillValue} value to fill array section with
 * @param {number} [end=Array<ArrayElement>['length']]
 * @returns {<ArrayElement>(array: ArrayElement[]) => Array<FillValue | ArrayElement>}
 * @template FillValue
 * @example
 * fillEnd(1)   (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fillEnd(3, 2)(['a', 'b', 'c', 'd']); // [3, 3, 3, 'd'];
 */
function fillEnd (value, end) {
    return function fillEnd (array) {
        const { length } = array;
        const newArray = new Array(length);
        const stop = end || length;
        let index = 0;
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