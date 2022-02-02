import { FirstParameter } from "../../../function/index.D";
/**
 * @example
 * const countIsGt2 = countBy((value) => value > 2);
 * countIsGt2([0, 1, 2]);       // 0
 * countIsGt2([0, 1, 2, 3, 4]); // 2
 * countIsGt2([3, 4, 9]);       // 2
 */
declare function countBy<Executor extends <ArrayElement>(element: ArrayElement, index: number, array: ArrayElement[]) => any>(executor: Executor): (array: FirstParameter<Executor>[]) => number;
export default countBy;
