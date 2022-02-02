import { ExcludeNumberType } from "../../index.D";
/**
 * @param {any} value
 * @returns {value is 0}
 */
declare function isZero<X extends ExcludeNumberType>(x: X): false;
declare function isZero<X extends number>(x: X): X extends 0 ? true : false;
declare function isZero(x: unknown): x is 0;
export default isZero;
