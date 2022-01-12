/**
 * 
 * @param {Executor & (element: Element, index: number, array: Element[]) => any} executor 
 * @returns {(array: Element[]) => number}
 * @template {<Element>(element: Element, index: number, array: Element[]) => any} Executor
 * @template Element
 */
function countBy (executor) {
    return function useCountBy (array) {
        let count = 0;
        let index = 0;
        const { length } = array;
        while (index < length) {
            if (executor(array[index], index, array)) count++;
            index++;
        }
        return count;
    }
}

module.exports = countBy;