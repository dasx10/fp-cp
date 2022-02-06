/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-plusplus */
import { ArrayIterateFunction } from '../../index.D';

function averageBy <ArrayElement>(
  executor: ArrayIterateFunction<ArrayElement, number>,
  array: ArrayElement[]): number;

function averageBy <ArrayElement>(
  executor: ArrayIterateFunction<ArrayElement, number>
): (array: ArrayElement[]) => number;

function averageBy <ArrayElement>(
  executor: (element: ArrayElement, index: number,
    array: ArrayElement[]
  ) => number, array: ArrayElement[]): number;

function averageBy <ArrayElement>(
  executor: ArrayIterateFunction<ArrayElement, number>,
  array?: ArrayElement[],
) {
  if (arguments.length === 1) {
    return function useAverageBy(array: ArrayElement[]) {
      const { length } = array;
      let index = 0;
      let result = 0;
      while (index < length) {
        result += executor(array[index], index, array);
        index++;
      }
      return result / length;
    };
  }

  const { length } = array as ArrayElement[];
  let index = 0;
  let result = 0;
  while (index < length) {
    result += executor((array as ArrayElement[])[index], index, (array as ArrayElement[]));
    index++;
  }
  return result / length;
}

export default averageBy;
