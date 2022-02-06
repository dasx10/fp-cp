import type { Chars } from '../../string/chars/index.D';
/**
 * @example
 * const at3 = at(3);
 * at3([1, 2, 3, 4]); // 4
 * at3('test') // 't'
*/
declare function at<Index extends number>(index: Index): <From extends string | any[]>(from: From) => From extends string ? Chars<From>[Index] : From[Index];
declare function at<Index extends number, InputArray extends any[]>(index: Index, array: InputArray): InputArray extends [infer _F, ...infer _N] ? InputArray[Index] : InputArray extends (infer ArrayElement)[] ? ArrayElement | void : never;
declare function at<Index extends number, Value extends string>(index: Index, string: Value): Chars<Value>[Index];
declare function at<Key extends keyof InputRecord, InputRecord extends Record<PropertyKey, any>>(key: Key, record: InputRecord): InputRecord[Key];
export default at;
