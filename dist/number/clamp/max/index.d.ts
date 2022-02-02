import { ExcludeNumber } from "../../index.D";
/**
 * @param {number} maximum
 * `y > x` `?` `y : x`
 */
declare function max<X extends number, Y extends number>(x: X, y: ExcludeNumber<Y, X>): X | Y;
declare function max<X extends number>(x: X): <Y extends number>(y: ExcludeNumber<Y, X>) => X | Y;
export default max;
