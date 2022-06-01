import { IS_POSITIVE } from "./index.D";

/**
 * @param {any} value 
 * @returns {value is number}
 */
function isPositive <Value extends number>(value: Value): IS_POSITIVE<Value>;
function isPositive (value: unknown): value is number;
function isPositive (value: any) {
    return value > 0;
}

export default isPositive;
