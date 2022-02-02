/**
 * @param {FillValue} value to fill array section with
 * @returns {(array: any[]) => Array<FillValue>}
 * @template FillValue
 * @example
 * fillFull(3)(['a', 'b', 'c', 'd']); // [3, 3, 3, 3];
 */
declare function fillFull<T>(value: T): (array: T[]) => any[];
export default fillFull;
