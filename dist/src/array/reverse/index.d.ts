import Array from "..";
import { ArrayType } from "../index.D";
import { ArrayMaybeReverse } from "./index.D";
/**
 * @param {Array<ArrayElement>} array
 * @returns {Array<ArrayElement>}
 * @template ArrayElement
 */
declare function reverse<T extends any[] | Array<any, any[]>>(array: T): Array<ArrayType<T>, ArrayMaybeReverse<T>>;
export default reverse;
