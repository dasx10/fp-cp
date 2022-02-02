/**
 * @example
 * fillEnd(1)   (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fillEnd(3, 2)(['a', 'b', 'c', 'd']); // [3, 3, 3, 'd'];
 */
declare function fillEnd<T>(value: T, end: number): (array: T[]) => any[];
export default fillEnd;
