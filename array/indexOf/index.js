/**
 * @param {ArrayElement} element 
 * @returns {(array: ArrayElement[]) => number}
 * @template ArrayElement
 */
function indexOf (element) {
    return function useIndexOf (array) {
        let index = 0;
        const { length } = array;
        while (index < length) {
            if (element === array[index]) return index;
            index++;
        }
        return -1;
    }
}

module.exports = indexOf;