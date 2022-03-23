import _curry2 from "../../../function/curry/2/_/index";
import _findRight from "./_/index";
import type { IterateDef } from "../../index.D";

/**
 * @example
 * const findZero = find((element) => element === 0);
 * findZero([1, 2, 6, 0, 7]); // 0
 * findZero(['a', 'b', 'c']); // undefined
 */
const findRight: {
  <X>(def: IterateDef<X>, array: X[]): X | void;
  <X>(def: IterateDef<X>): (array: X[]) => X | void;
} = _curry2(_findRight)
export default findRight;
