// core
import _                     from "../../../index";
import arrayLikeAtCore       from "../core/index";
import arrayLikeAtDirectCore from "../direct/core/index";
import arrayLikeAtInvertCore from "../invert/core/index";

// interfaces
import type { ArrayLikeAtDef } from "./index.D";
import type { ToIndex }        from "../../index/index.D";
import type { placeholder }    from "../../../index";

/**
 * @description Returns the item located at the specified index
 * @param {number} index The zero-based index of the desired code unit. A negative index will count back from the last item
 * @param {X} x - Array, String, Arguments 
 * @returns {X extends ArrayLike<infer Value> ? (Value | undefined) : undefined} item located at the specified index
 * @template {ArrayLike<any>} X
 * @example
 * const arrayLikeAtFirst = arrayLikeAtDef(0); // <Value>(x: ArrayLike<Value>) => Value | void;
 * arrayLikeAtFirst([1, 2, 3]); // 1;
 * 
 * arrayLikeAtDef(1, [1, 2, 3]); // 2;
 * arrayLikeAtDef(2, [1, 2, 3]); // 3;
 * arrayLikeAtDef(3, [1, 2, 3]); // undefined;
 * 
 * const arrayLikeAtLast = arrayLikeAtDef(-1); // <Value>(x: ArrayLike<Value>) => Value | void;
 * arrayLikeAtLast([1, 2, 3]); // 3;
 * 
 * arrayLikeAtDef(-2, [1, 2, 3]); // 2;
 * arrayLikeAtDef(-3, [1, 2, 3]); // 1;
 * arrayLikeAtDef(-4, [1, 2, 3]); // undefined;
 */
const arrayLikeAtDef = (function arrayLikeAtDef <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index> | placeholder, x?: X | ToIndex<Index>) {
  if (arguments.length === 1) {
    const arrayLikeAt = index < 0 ? arrayLikeAtInvertCore : arrayLikeAtDirectCore;
    return (x: ArrayLike<any>) => arrayLikeAt(<ToIndex<number>>index, <X>x);
  }

  else if (index === _) return <Index extends number>(index: ToIndex<Index>) => arrayLikeAtCore(index, <X>x);
  else return arrayLikeAtCore(<ToIndex<Index>>index, <X>x);
}) as ArrayLikeAtDef;

export default arrayLikeAtDef;
