import type { OnlyNegative }    from "../../../../number/index.D";
import type { ArrayLimitRight } from "./index.D";

/**
 * @param {number} finish 
 * @param {Value[]} array 
 * @returns {Value[]}
 * @template Value
 * @example
 * _limitRight(-3, [1, 2, 3, 4, 5, 6]); // [4, 5, 6];
 */
function _limitRight <Finish extends number, X extends readonly any[]>(finish: OnlyNegative<Finish>, array: X): ArrayLimitRight<Finish, X> {
  const { length } = array;
  if (length > 0) {
    const calcStart = finish + length;
    
    let start = calcStart > 0 ? calcStart : 0;
    const stop = length - start;
    const filtered = new Array(stop);
    let index = 0;
    while (index < stop) {
      filtered[index] = array[start];
      start++;
      index++;
    }

    return filtered as ArrayLimitRight<Finish, X>;
  }

  return [] as ArrayLimitRight<Finish, X>;
}

export default _limitRight;
