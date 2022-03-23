import _curry2 from "../../../function/curry/2/_/index";
import { FirstParameter } from "../../../function/index.D";
import { IterateDef } from "../../index.D";
import _countBy from "./_/index";

/**
 * @example
 * const countIsGt2 = countBy((value) => value > 2);
 * countIsGt2([0, 1, 2]);       // 0
 * countIsGt2([0, 1, 2, 3, 4]); // 2
 * countIsGt2([3, 4, 9]);       // 2
 */
const countBy: {
  <X>(executor: IterateDef<X>): (array: X[]) => number;
  <X>(executor: IterateDef<X>, array: X[]): number;
} = _curry2(_countBy);

export default countBy;
