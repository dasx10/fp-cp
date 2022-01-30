/**
 * @example
 * const findZero = find((element) => element === 0);
 * findZero([1, 2, 6, 0, 7]); // 0
 * findZero(['a', 'b', 'c']); // undefined
 */
function findRight <T>(executor: (element: T, index: number, array: T[]) => any) {
    return function useFindRight (array: T[]) {
        let { length } = array;
        while (--length >= 0) {
            const element = array[length];
            if (executor(element, length, array)) return element;
        }
    }
}

export default findRight;