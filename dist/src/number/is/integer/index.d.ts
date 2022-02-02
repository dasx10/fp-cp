import { ExcludeNumberType } from "../../index.D";
declare type IS_INTEGER<X extends number> = number extends X ? boolean : `${X}` extends `${number}.${number}` ? false : true;
/**
 * @param {any} value
 * @returns {value is number}
 */
declare function isInteger<X extends number>(x: X): IS_INTEGER<X>;
declare function isInteger<X extends ExcludeNumberType>(x: X): false;
declare function isInteger(x: unknown): x is number;
export default isInteger;
