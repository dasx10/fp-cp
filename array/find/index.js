/**
 * 
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor 
 * @returns {ArrayElement | void}
 * @template ArrayElement;
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