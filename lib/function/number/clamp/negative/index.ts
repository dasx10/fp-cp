/**
 * `X` `<=` `0`
 */
export type Negative<X extends number = number> = number extends X
    ? number
    : `${X}` extends `-${number}`
        ? X
        : -0;

/**
 * Returned negative number
 * @param {any} value 
 * @returns {number} `value < 0 ? value : -0`
 * @example
 * const a = negative(-3); // -3
 * const b = negative(3); // 0
 */
function negative <Value extends number>(value: Value): Negative<Value> {
    return (value < 0 ? value : -0) as Negative<Value>;
}

export default negative;