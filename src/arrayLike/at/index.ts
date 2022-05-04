// core
import _                    from "../../index";
import arrayLikeAtCore      from "./core/index";
import arrayLikeAtRightCore from "./right/core/index";
import arrayLikeAtLeftCore  from "./left/core/index";

// dependencies
import arrayLikeAtRightDef from "./right/index";
import arrayLikeAtLeftDef  from "./left/index";
import arrayLikeAtRandom   from "./random/index";
import arrayLikeHead       from "./head/index";
import arrayLikeTail       from "./tail/index";

// interfaces
import type { placeholder } from '../../index';
import type { ToIndex }     from "../index/index.D";
import type { ArrayLikeAtLib, ArrayLikeAtDef } from "./index.D";

const arrayLikeAtDef = (function arrayLikeAtDef <Index extends number, X extends ArrayLike<any>>(index: ToIndex<Index> | placeholder, x?: X | ToIndex<Index>) {
  if (arguments.length === 1) {
    const arrayLikeAt = index < 0 ? arrayLikeAtRightCore : arrayLikeAtLeftCore;
    return (x: ArrayLike<any>) => arrayLikeAt(<ToIndex<number>>index, x);
  }

  else if (index === _) return <Index extends number>(index: ToIndex<Index>) => arrayLikeAtCore(index, <X>x);
  else return arrayLikeAtCore(<ToIndex<Index>>index, <X>x);
}) as ArrayLikeAtDef;

const arrayLike: ArrayLikeAtLib = Object.assign(arrayLikeAtDef, {
  core   : arrayLikeAtCore,
  head   : arrayLikeHead,
  tail   : arrayLikeTail,
  right  : arrayLikeAtRightDef,
  left   : arrayLikeAtLeftDef,
  random : arrayLikeAtRandom,
});

export default arrayLike;
