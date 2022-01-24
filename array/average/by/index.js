/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => number} executor 
 * @returns {(array: ArrayElement[]) => number}
 * @template ArrayElement
 */
function averageBy (executor) {
    return function useAverageBy (array) {
        const { length } = array;
        let index = 0;
        let result = 0;
        while (index < length) {
            result+=executor(array[index], index, array);
            index++;
        }
        return result / length;
    }
}

module.exports = averageBy;