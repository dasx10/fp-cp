/**
 * @example
 * const findZero = find((element) => element === 0);
 * findZero([1, 2, 6, 0, 7]); // 0
 * findZero(['a', 'b', 'c']); // undefined
 */
function find <T>(executor: (element: T, index: number, array: readonly T[]) => any) {
    return function useFind (array: readonly T[]) {
        const { length } = array;
        let index = 0;
        while (index < length) {
            const element = array[index];
            if (executor(element, index, array)) return element;
            index++;
        }
    }
}

export default find;
