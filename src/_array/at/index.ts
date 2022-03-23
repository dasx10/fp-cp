/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Chars } from '../../string/chars/index.D';
import head from './head/index';
import type { At } from './index.D';
import atRight from './right/index';
import tail from './tail/index';

/**
 * @example
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/
// type InA = any[] | readonly any[]

function at <Index extends number, X extends readonly any[]>(index: Index, array: X): At<Index, X>;
function at <Index extends number, X extends string>(index: Index, string: X): At<Index, Chars<X>>;
function at <Index extends number>(index: Index): {
  <X extends readonly any[]>(array: X): At<Index, X>;
  <X extends string>(string: X): At<Index, Chars<X>>;
};

function at <
  Index extends number,
  From  extends string | Record<PropertyKey, any>,
>(index: Index, from ?: From) {
  const isLtZero = index < 0;
  if (arguments.length === 1) {
    return function useAt <From2 extends string | any[]>(
      from2: From2,
    ) {
      return from2[isLtZero ? from2.length - index : index];
    };
  }

function at (index: number, x?: any) {
  const isGTZero = index > 0;
  return arguments.length === 1
    ? (x: string | any[]) => x[isGTZero ? index : x.length - index]
    : x[isGTZero ? index : x.length - index];
}

export default at;


const a = at(2, [1, 2, 3, 4, 5] as const);
