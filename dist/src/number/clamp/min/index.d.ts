import { ExcludeNumber } from "../../index.D";
/**
 * @param {number} minimum
 * `y < x` `?` `y : x;`
 * @example
 * min(3, 1); // 1;
 * min(10, 20); // 10;
 *
 * const min3 = min(3); // [function (y: number) => x | y]
 * min3(8); // 8
 * min3(1); // 1
 */
declare function min<X extends number>(x: X): <Y extends number>(y: ExcludeNumber<Y, X>) => X | Y;
declare function min<X extends number, Y extends number>(x: X, y: ExcludeNumber<Y, X>): X | Y;
export default min;
