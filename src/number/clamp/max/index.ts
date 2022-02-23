import _curry2 from "../../../function/curry/2/_/index";
import type { ExcludeNumber } from "../../index.D";
import _max from "./_/index";
import { MAX } from "./_/index.D";

/**
 * @param {number} maximum
 * `y > x` `?` `y : x`
 * @example 
 * max(2, 3); // 3
 * const max2 = max(2); // [function (x: number)]
 * max2(5) // 5
 * max2(1) // 2
 */

const max: {
  <Y extends number, X extends number>(y: Y, x: X): MAX<Y, X>;
  <Y extends number>(y: Y): <X extends number>(x: X) => MAX<Y, X>;
} = _curry2(_max);

export default max;
