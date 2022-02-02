import Array from "../..";
/**
 * @description return a new array with a filled section
 * @example
 * fillStart(1)   (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fillStart(3, 2)(['a', 'b', 'c', 'd']); // ['a', 3, 3, 3];
 */
declare function fillStart<T>(value: T, start?: number): (array: T[]) => Array<unknown, unknown[]>;
export default fillStart;
