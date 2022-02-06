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
 * @returns {number} `x > 0` `?` `x : 0`
 * 
 * @example
 * const a = positive(-3); // 0
 * const b = positive(3); // 3
 */
const positive = <X extends number>(x: X) => (x > 0 ? x : 0) as Positive<X>;
export default positive;
