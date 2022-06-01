import { ExcludeNumberType } from "../../index.D";

type IS_INTEGER<X extends number> = number extends X ? boolean :
    `${X}` extends `${number}.${number}`
        ? false
        : true;

/**
 * @param {any} value 
 * @returns {value is number}
 */
function isInteger (x: unknown): x is number;
function isInteger <X extends ExcludeNumberType>(x: X): false
function isInteger <X extends number>(x: X): IS_INTEGER<X>
function isInteger <X>(x: X) {
    // @ts-ignore
    return ((x ^ 0) === x);
}

export default isInteger;
