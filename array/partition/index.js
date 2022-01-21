/**
 * 
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor 
 * @returns {(array: Array<ArrayElement>) => [ArrayElement[], ArrayElement[]]}
 * @template ArrayElement
 */
function partition (executor) {
    return function usePartition (array) {
        const { length } = array;
        const accept = new Array();
        const reject = new Array();
        let index = 0;
        while (index < length) {
            const element = array[index];
            (executor(element, index, array) ? accept : reject).push(element);
            index++;
        }
        return [accept, reject];
    }
}

module.exports = partition;