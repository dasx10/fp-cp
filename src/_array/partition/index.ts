/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import type { IterateDef } from '../index.D';

/**
 * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => any} executor
 * @returns {(array: Array<ArrayElement>) => [ArrayElement[], ArrayElement[]]}
 * @template ArrayElement
 */
function partition <T>(executor: IterateDef<T>) {
  return function usePartition(array: T[]): [Array<T>, Array<T>] {
    const { length } = array;
    const accept = new Array<T>();
    const reject = new Array<T>();
    let index = 0;
    while (index < length) {
      const element = array[index];
      (executor(element, index, array) ? accept : reject).push(element);
      index++;
    }
    return [accept, reject];
  };
}

export default partition;
