/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor 
 * @returns {(array: ArrayElement[]) => ArrayElement[] | []}
 * @template ArrayElement
 */
function filter (executor) {
    return function useFilter (array) {
        const { length } = array;
        const filtered = [];
        let index = 0;
        while (index < length) {
            const element = array[index];
            if (executor(element, index, array)) filtered.push(element);
            index++;
        }
        return filtered;
    }
}

module.exports = filter;