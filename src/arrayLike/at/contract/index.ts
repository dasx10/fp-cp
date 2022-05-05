// core
import _                    from "../../../index";
import arrayLikeAtCore      from "../core/index";
import arrayLikeAtDirectCore  from "../direct/core/index";
import arrayLikeAtRightCore from "../invert/core/index";

// interfaces
import type { ArrayLikeAtDef } from "./index.D";
import type { ToIndex }        from "../../index/index.D";
import type { placeholder }    from "../../../index";

const arrayLikeAtDef = (function arrayLikeAtDef <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index> | placeholder, x?: X | ToIndex<Index>) {
  if (arguments.length === 1) {
    const arrayLikeAt = index < 0 ? arrayLikeAtRightCore : arrayLikeAtDirectCore;
    return (x: ArrayLike<any>) => arrayLikeAt(<ToIndex<number>>index, x);
  }

  else if (index === _) return <Index extends number>(index: ToIndex<Index>) => arrayLikeAtCore(index, <X>x);
  else return arrayLikeAtCore(<ToIndex<Index>>index, <X>x);
}) as ArrayLikeAtDef;

export default arrayLikeAtDef;
