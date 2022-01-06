/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor 
 * @returns {(array: Array<ArrayElement>) => ArrayElement | void} new find function 
 * @template ArrayElement element from input array;
 * @example
 * const findZero = find((element) => element === 0);
 * findZero([1, 2, 6, 0, 7]); // 0
 * findZero(['a', 'b', 'c']); // undefined
 */
function find (executor) {
    return function useFind (array) {
        const { length } = array;
        let index = 0;
        while (index < length) {
            const element = array[index];
            if (executor(element, index, array)) return element;
            index++;
        }
    }
}

module.exports = find;