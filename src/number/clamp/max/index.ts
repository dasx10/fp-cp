import _curry2 from "../../../function/curry/_2/index";
import type { ExcludeNumber } from "../../index.D";

/**
 * @param {number} maximum
 * `y > x` `?` `y : x`
 * @example 
 * max(2, 3); // 3
 * const max2 = max(2); // [function (x: number)]
 * max2(5) // 5
 * max2(1) // 2
 */
// @ts-ignore
function max <Y extends number, X extends number>(y: Y, x: ExcludeNumber<X, Y>): X | Y;
// @ts-ignore
function max <Y extends number>(y: Y): <X extends number>(x: ExcludeNumber<X, Y>) => X | Y;
// @ts-ignore
const max = _curry2((y: number, x: number) => x > y ? x : y);
export default max;
