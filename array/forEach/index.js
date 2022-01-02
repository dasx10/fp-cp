/**
 * @param {(element: Element, index: number, array: Array<Element>) => any} executor 
 * @return {(array: Array<Element>) => void}
 * @template Element
 */

module.exports = function forEach (executor) {
    /**
     * @param {array: Element[]} array
     * @return {void}
     */
    return function useEach (array) {
        const { length } = array;
        let index = 0;
        while (index < length) {
            executor(array[index], index, array);
            index++;
        }
    }
}