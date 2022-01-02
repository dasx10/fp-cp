/**
 * 
 * @param {(currentValue: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue} executor 
 * @param {InitialValue} initialValue 
 * @returns {InitialValue}
 * @template InitialValue, ArrayElement
 */
function reduce (executor, initialValue) {
    return function useReduce (arrayOrString) {
        const { length } = arrayOrString;
        let index = 0;
        while (index < length) {
            initialValue = executor(initialValue, arrayOrString[index], index, arrayOrString);
            index++;
        }
        return initialValue;
    }
}

module.exports = reduce;