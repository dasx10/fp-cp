/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor 
 * @returns {(array: Array<ArrayElement>) => ArrayElement | void} new find function 
 * @template ArrayElement element from input array;
 * @example
 * const findZero = find((element) => element === 0);
 * findZero([1, 2, 6, 0, 7]); // 0
 * findZero(['a', 'b', 'c']); // undefined
 */
 function findRight (executor) {
    return function useFindRight (array) {
        let { length } = array;
        while (--length >= 0) {
            const element = array[length];
            if (executor(element, length, array)) return element;
        }
    }
}

module.exports = findRight;