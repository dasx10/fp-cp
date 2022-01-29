/**
 * @param {ArrayElement} element 
 * @returns {(array: ArrayElement[]) => number}
 * @template ArrayElement
 */
function lastIndexOf (element) {
    return function useIndexOf (array) {
        let index = array.length;
        while (--index >= 0) if (element === array[index]) return index;
        return -1;
    }
}

module.exports = lastIndexOf;