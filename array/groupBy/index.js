/**
 * 
 * @param {Executor & (element: Element, index: number, array: Element[]) => PropertyKey} executor 
 * @returns {(array: Element[]) => Record<ReturnType<Executor>, Element[]>}
 * @template Executor
 * @template Element
 */
function groupBy (executor) {
    return function useGroupBy (array) {
        const groups = Object.create(null);
        let index = 0;
        const { length } = array;

        while (index < length) {
            const element = array[index]
            const key = executor(element, index, array);
            if (groups[key]) groups[key].push(element);
            else groups[key] = [element];
            index++;
        }

        return groups;
    }
}

module.exports = groupBy;