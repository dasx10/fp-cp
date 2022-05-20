import type { ToIndexDirect } from "../../../index/index.D";
import type { ArrayLikeAtDirect, ArrayLikeAtDirectCore } from "./index.D";

/**
 * @description Returns the item located at the specified direct index
 * @param {number} index The zero-based index of the desired code unit.
 * @param {ArrayLike<Value>} x - Array, String, Arguments 
 * @returns {Value | void} item located at the specified index
 * @template {Value} Value
 * @example
 * arrayLikeAtDirectCore(0, [1, 2, 3]); // 1;
 * arrayLikeAtDirectCore(1, [1, 2, 3]); // 2;
 * arrayLikeAtDirectCore(2, [1, 2, 3]); // 3;
 * arrayLikeAtDirectCore(3, [1, 2, 3]); // undefined;
 */
const arrayLikeAtDirectCore: ArrayLikeAtDirectCore = <Index extends keyof X & number, X extends Record<number, unknown>>(index: ToIndexDirect<Index>, x: X) => x[index] as ArrayLikeAtDirect<X, Index>;
export default arrayLikeAtDirectCore;
