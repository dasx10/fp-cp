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
declare function max<Y extends number, X extends number>(y: Y, x: ExcludeNumber<X, Y>): X | Y;
declare function max<Y extends number>(y: Y): <X extends number>(x: ExcludeNumber<X, Y>) => X | Y;
export default max;
