/**
 * `X` `>=` `0`
 */
export type Positive<X extends number = number> = number extends X 
    ? number 
    : `${X}` extends `-${number}`
        ? 0
        : X;

/**
 * @Returned Positive number
 * @param {any} value 
 * @returns {number}
 * 
 * @example
 * const a = positive(-3); // 0
 * const b = positive(3); // 3
 */
function positive <Value extends number>(value: Value): Positive<Value> {
    return (value >= 0 ? value : 0) as Positive<Value>;
}

export default positive;