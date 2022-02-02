/**
 * @example
 * const findZero = find((element) => element === 0);
 * findZero([1, 2, 6, 0, 7]); // 0
 * findZero(['a', 'b', 'c']); // undefined
 */
declare function find<T>(executor: (element: T, index: number, array: T[]) => any): (array: T[]) => T | undefined;
export default find;
