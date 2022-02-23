import _curry2 from "../../../function/curry/2/_/index";
import _min from "./_/index";
import type { MIN } from "./_/index.D";

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
const min: {
  <Y extends number, X extends number>(y: Y, x: X): MIN<Y, X>
  <Y extends number, X extends number>(y: Y, x: X): MIN<Y, X>
} = _curry2(_min);

export default min;
