/* eslint-disable @typescript-eslint/no-unused-vars */
import type Array from '../index';
import type { Chars } from '../../string/chars/index.D';

/**
 * @example
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/

function at <Index extends number>(index: Index): <
  From extends string | any[],
>(from: From) => From extends string
  ? Chars<From>[Index]
  : From[Index];

function at <
  Index extends number,
  InputArray extends any[],
>(index: Index, array: InputArray): InputArray extends [infer _F, ...infer _N]
  ? InputArray[Index]
  : InputArray extends (infer ArrayElement)[]
    ? ArrayElement | void
    : never;

function at <
    Index extends number,
    Value extends string,
  >(index: Index, string: Value): Chars<Value>[Index];

function at <
  Key extends keyof InputRecord,
  InputRecord extends Record<PropertyKey, any>,
>(key: Key, record: InputRecord): InputRecord[Key];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function at <
  Index extends number,
  From extends string | Record<PropertyKey, any>,
>(index: Index, from ?: From) {
  const isLtZero = index < 0;
  if (arguments.length === 1) {
    return function useAt <From2 extends string | any[]>(
      from2: From2,
    ) {
      return from2[isLtZero ? from2.length - index : index];
    };
  }

  return (from as From)[isLtZero ? (from as From).length - index : index];
}

export default at;
