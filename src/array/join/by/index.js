/**
 * 
 * @param {Executor} executor 
 * @returns {(array: Executor extends (element: infer ArrayElement) => any ? ArrayElement[] : any[]) => string}
 * @template {<ArrayElement>(element:ArrayElement, index: number, array: ArrayElement) => string} Executor
 */
function joinBy (executor) {
    return function useJoinBy (array) {
        const { length } = array;
        if (length) {
            let index = 1;
            let result = '' + array[0];
            while (index < length) {
                result += array[index];
                index++;
            }

            return result;
        }

        return '';
    }
}

module.exports = joinBy;