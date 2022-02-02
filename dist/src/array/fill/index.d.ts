/**
 * @description return a new array with a filled section
 * @example
 * fill(1)      (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fill(1, 1)   (['a', 'b', 'c', 'd']); // ['a', 1, 1, 1];
 * fill(1, 0, 2)(['a', 'b', 'c', 'd']); // [1, 1, 1, 'd'];
 */
declare function fill<T>(value: T, start: number, end: number): (array: T[]) => T[];
export default fill;
