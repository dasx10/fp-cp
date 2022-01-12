/**
 * @param {Executor & (element: Element, index: number, array: Element[]) => PropertyKey} executor
 * @returns {(array: Element[]) => Record<ReturnType<Executor>, Element>}
 * @template Element
 * @template Executor
 */
function keyBy (executor) {
    return function useKeyBy (array) {
        const mapped = Object.create(null);
        const { length } = array;
        let index = 0;
        while (index < length) {
            const element = array[index];
            mapped[executor(element, index, array)] = element;
            index++;
        }
        return mapped;
    }
}

module.exports = keyBy;