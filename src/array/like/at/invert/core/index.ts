import type { ToIndexInvert }         from '../../../index/index.D';
import type { ArrayLikeAtInvertCore } from './index.D';

/**
 * @description Returns the item located at the specified index
 * @param {number} index The negative index of the desired code unit will be counted from the last element
 * @param {ArrayLike<Value>} x - Array, String, Arguments 
 * @returns {Value | void} item located at the specified index
 * @template {Value} Value
 * @example
 * arrayLikeAtInvertCore(-1, [1, 2, 3]); // 3;
 * arrayLikeAtInvertCore(-2, [1, 2, 3]); // 2;
 * arrayLikeAtInvertCore(-3, [1, 2, 3]); // 1;
 * arrayLikeAtInvertCore(-4, [1, 2, 3]); // undefined;
 */
const arrayLikeAtInvertCore = (<Index extends number, X extends ArrayLike<unknown>>(index: ToIndexInvert<Index>, arrayLike: X) => arrayLike[arrayLike.length + index]) as ArrayLikeAtInvertCore;
export default arrayLikeAtInvertCore;
