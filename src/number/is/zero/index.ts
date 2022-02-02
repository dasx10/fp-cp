import { ExcludeNumberType } from "../../index.D";

/**
 * @param {any} value 
 * @returns {value is 0}
 */
function isZero <X extends number>(x: X): X extends 0 ? true : false;
function isZero <X extends ExcludeNumberType>(x: X): false;
function isZero (x: unknown): x is 0;
function isZero <X>(x: X) {
    // @ts-ignore
    return x === 0;
}

export default  isZero;