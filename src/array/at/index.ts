/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Chars } from '../../string/chars/index.D';
import type { At } from './index.D';

/**
 * @example
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/
function at <Index extends number, X extends readonly any[]>(index: Index, x: X): At<Index, X>;
function at <Index extends number, X extends string>(index: Index, x: X): At<Index, Chars<X>>;
function at <Index extends number> (index: Index): {
  <X extends readonly any[]>(x: X): At<Index, X>;
  <X extends string>(x: X): At<Index, Chars<X>>;
}

function at (index: number, x?: any) {
  const isGTZero = index > 0;
  return arguments.length === 1
    ? (x: string | any[]) => x[isGTZero ? index : x.length - index]
    : x[isGTZero ? index : x.length - index];
}

export default at;
