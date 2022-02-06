import type { ArrayIterateFunction } from '../index.D';
/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor
 * @returns {(array: Array<ArrayElement>) => [ArrayElement[], ArrayElement[]]}
 * @template ArrayElement
 */
declare function partition<T>(executor: ArrayIterateFunction<T>): (array: T[]) => [Array<T>, Array<T>];
export default partition;
