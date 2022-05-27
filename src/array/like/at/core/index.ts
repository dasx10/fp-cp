// core
import arrayLikeAtDirectCore from "../direct/core/index";
import arrayLikeAtInvertCore from "../invert/core/index";

import type {
	ToIndex,
	ToIndexDirect,
	ToIndexInvert
} from "../../index/index.D";

import type { ArrayLikeAtCore } from "./index.D";

/**
 * @description Returns the item located at the specified index
 * @param {number} index The zero-based index of the desired code unit. A negative index will count back from the last item
 * @param {ArrayLike<Value>} x - Array, String, Arguments 
 * @returns {Value | void} item located at the specified index
 * @template {Value} Value
 * @example
 * arrayLikeAtCore(0, [1, 2, 3]); // 1;
 * arrayLikeAtCore(1, [1, 2, 3]); // 2;
 * arrayLikeAtCore(2, [1, 2, 3]); // 3;
 * arrayLikeAtCore(3, [1, 2, 3]); // undefined;
 * 
 * arrayLikeAtCore(-1, [1, 2, 3]); // 3;
 * arrayLikeAtCore(-2, [1, 2, 3]); // 2;
 * arrayLikeAtCore(-3, [1, 2, 3]); // 1;
 * arrayLikeAtCore(-4, [1, 2, 3]); // undefined;
 */
const arrayLikeAtCore = (<Index extends number, X extends ArrayLike<unknown>>(index: ToIndex<Index>, x: X) => index < 0 
	? arrayLikeAtInvertCore (<ToIndexInvert<Index>>index, x)
	: arrayLikeAtDirectCore (<ToIndexDirect<Index>>index, x)) as ArrayLikeAtCore;

export default arrayLikeAtCore;
