import _curry2 from "../../../function/curry/2/_/index";
import { FirstParameter } from "../../../function/index.D";
import { ArrayIterateFunction } from "../../index.D";
import _countBy from "./_/index";

/**
 * @example
 * const countIsGt2 = countBy((value) => value > 2);
 * countIsGt2([0, 1, 2]);       // 0
 * countIsGt2([0, 1, 2, 3, 4]); // 2
 * countIsGt2([3, 4, 9]);       // 2
 */

// @ts-ignore
function countBy <ArrayElement> (executor: ArrayIterateFunction<ArrayElement>): (array: ArrayElement[]) => number;
// @ts-ignore
function countBy <ArrayElement> (executor: ArrayIterateFunction<ArrayElement>, array: ArrayElement[]): number;
// @ts-ignore
const countBy = _curry2(_countBy);

export default countBy;
