import arrayLikeAtCore    from "../core/index";
import arrayLikeHead      from "../head/index";
import arrayLikeAtDirectDef from "../direct/index";
import arrayLikeAtRandom  from "../random/index";
import arrayLikeAtInvert   from "../invert/index";
import arrayLikeTail      from "../tail/index";

// interfaces
import type { ArrayLikeAtLib } from "./index.D";

const arrayLikeAtLib: ArrayLikeAtLib = {
  core   : arrayLikeAtCore,
  head   : arrayLikeHead,
  tail   : arrayLikeTail,
  left   : arrayLikeAtDirectDef,
  random : arrayLikeAtRandom,
  invert : arrayLikeAtInvert,
};

export default arrayLikeAtLib;
